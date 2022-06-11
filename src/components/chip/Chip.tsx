/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import * as Style from './styles'
import React, { ReactNode } from 'react'

interface PropTypes {
  style?: SerializedStyles,
  children?: ReactNode
}
export default function Chip(props: PropTypes) {
  return (
    <div css={css`${Style.container}; ${props.style};`}>
      {props.children}
    </div>
  )
}