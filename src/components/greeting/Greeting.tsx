/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import * as Style from './styles'
import React, { ReactNode } from 'react'
import {Text, TextStyle} from '../text'

interface PropTypes {
  style?: SerializedStyles,
  children?: ReactNode
}
export default function Greeting(props: PropTypes) {
  return (
    <div css={css`${Style.container}; ${props.style};`}>
      <Text style={TextStyle.h2}>Hi, I'm Azriel</Text>
      <Text style={TextStyle.h1}>I build software</Text>
      <Text style={TextStyle.body}>I'm a Software Developer with a passion for Android and a burning curiosity for just about everything else. My Android skills pay the bills but I'm a tolerable web dev when I'm in the mood.</Text>
    </div>
  )
}