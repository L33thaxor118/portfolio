/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import * as Style from './styles'
import React, { ReactNode } from 'react'
import {Text, TextStyle} from '../text'

interface PropTypes {
  data: GreetingData
  style?: SerializedStyles
  children?: ReactNode
}

interface GreetingData {
  intro: string
  title: string
  statement: string
}

export default function Greeting(props: PropTypes) {
  return (
    <div css={css`${Style.container}; ${props.style};`}>
      <div css={Style.textContainer}>
        <Text style={TextStyle.h2}>{props.data.intro}</Text>
        <Text style={TextStyle.h1}>{props.data.title}</Text>
        <Text style={TextStyle.body}>{props.data.statement}</Text>
      </div>
      <img src='./alien_me.png' css={Style.img}/>
    </div>
  )
}