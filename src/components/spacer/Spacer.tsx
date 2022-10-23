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
  return (
    <div css={Style.container(props.x, props.y)}>
    </div>
  )
}