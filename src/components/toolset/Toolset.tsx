/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import * as Style from './styles'
import React, { ReactNode } from 'react'
import MiniCard from '../minicard'
import Spacer from '../spacer'
import { TextStyle, Text } from '../text'

interface PropTypes {
  style?: SerializedStyles,
}

export default function Toolset(props: PropTypes) {
  return (
    <div css={css`${Style.container}; ${props.style};`}>
      <Text style={TextStyle.h1}>What I use</Text>
      <Text style={TextStyle.h2}>Frontend</Text>
        <div css={css`${Style.skillRow}`}>
          <MiniCard title='Kotlin' imgSrc='./kotlin.svg'/>
          <Spacer x={10}/>
          <MiniCard title='Kotlin' imgSrc='./kotlin.svg'/>
          <Spacer x={10}/>
          <MiniCard title='Kotlin' imgSrc='./kotlin.svg'/>
          <Spacer x={10}/>
          <MiniCard title='Kotlin' imgSrc='./kotlin.svg'/>
        </div>
        <Text style={TextStyle.h2}>Backend</Text>
        <div css={css`${Style.skillRow}`}>
          <MiniCard title='Kotlin' imgSrc='./kotlin.svg'/>
          <Spacer x={10}/>
          <MiniCard title='Kotlin' imgSrc='./kotlin.svg'/>
          <Spacer x={10}/>
          <MiniCard title='Kotlin' imgSrc='./kotlin.svg'/>
          <Spacer x={10}/>
          <MiniCard title='Kotlin' imgSrc='./kotlin.svg'/>
        </div>
    </div>
  )
}