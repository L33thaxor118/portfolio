/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import * as Style from './styles'

export default function Placholder() {
  return (
    <div css={Style.container}>
      <h1 css={Style.title}>Coming soon...</h1>
    </div>
  )
}