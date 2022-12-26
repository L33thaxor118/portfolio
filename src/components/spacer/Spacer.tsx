/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import { css } from '@emotion/react'
import React, {useState, ReactElement, ReactNode, useEffect, useRef, useLayoutEffect} from 'react'
import { TextStyle, Text } from '../text'

interface PropTypes {
  x?: number
  y?: number
}

export default function Spacer(props: PropTypes) {
  const width = props.x != null ? props.x : 0
  const height = props.y != null ? props.y : 0

  return (
    <div css={Style.container(width, height)}>
    </div>
  )
}