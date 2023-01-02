/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import * as Style from './styles'
import React, { ReactNode } from 'react'

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
        <h2>{props.data.intro}</h2>
        <h1>{props.data.title}</h1>
        <p>{props.data.statement}</p>
      </div>
      <img src='./alien.jpeg' css={Style.img}/>
    </div>
  )
}