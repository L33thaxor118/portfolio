/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import * as Style from './styles'
import React from 'react'

interface PropTypes {
  text: string,
  style: SerializedStyles
}
export default function Chip(props: PropTypes) {
  return (
    <div css={css`${Style.container}; ${props.style};`}>
      <p css={Style.text}>{props.text}</p>
    </div>
  )
}