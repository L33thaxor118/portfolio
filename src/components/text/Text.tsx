/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import * as Style from './styles'
import React, { ReactNode } from 'react'

export enum TextStyle {
  h1,
  h2,
  body
}

interface PropTypesText {
  style: TextStyle
  children?: ReactNode
}

export function Text(props: PropTypesText) {
  let style
  switch(props.style) {
    case TextStyle.h1: {
      style = Style.h1Style
      break
    }
    case TextStyle.h2: {
      style = Style.h2Style
      break
    }
    case TextStyle.body: {
      style = Style.bodyStyle
      break
    }
  }
  return (
    <h1 css={style}>{props.children}</h1>
  )
}