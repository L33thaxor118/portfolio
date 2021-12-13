/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React from 'react'

interface PropTypes {
  text: string
}
export default function Chip(props: PropTypes) {
  return (
    <div css={Style.container}>
      <p css={Style.text}>{props.text}</p>
    </div>
  )
}