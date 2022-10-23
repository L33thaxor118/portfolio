/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import { css } from '@emotion/react'
import React, {useState, ReactElement, ReactNode, useEffect, useRef, useLayoutEffect} from 'react'
import { TextStyle, Text } from '../text'

interface PropTypes {
  imgSrc: string
  title: string
}

export default function MiniCard(props: PropTypes) {

  return (
    <div css={Style.container}>
      <img css={Style.toolImage} src={props.imgSrc}/>
      <Text useAltColor style={TextStyle.body}>{props.title}</Text>
    </div>
  )
}