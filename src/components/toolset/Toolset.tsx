/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import * as Style from './styles'
import React, { ReactNode } from 'react'
import MiniCard from '../minicard'
import Spacer from '../spacer'
import { TextStyle, Text } from '../text'

interface Tool {
  name: string,
  imgSrc: string
}

interface Toolset {
  frontend: Array<Tool>,
  backend: Array<Tool>
}

interface PropTypes {
  tools: Toolset,
  style?: SerializedStyles,
}

export default function Toolset(props: PropTypes) {
  return (
    <div css={css`${Style.container}; ${props.style};`}>
      <Text style={TextStyle.h1}>What I use</Text>
      <Spacer y={12}/>
      <Text style={TextStyle.h2}>Frontend</Text>
        <div css={Style.skillRow}>
          {
            props.tools.frontend.map((tool, idx)=>
              <MiniCard key={idx} css={{margin: '6px'}} title={tool.name} imgSrc={tool.imgSrc}/>
            )
          }
        </div>
        <Spacer y={12}/>
        <Text style={TextStyle.h2}>Backend</Text>
        <div css={Style.skillRow}>
          {
            props.tools.backend.map((tool, idx)=>
              <MiniCard key={idx} css={{margin: '6px'}} title={tool.name} imgSrc={tool.imgSrc}/>
            )
          }
        </div>
    </div>
  )
}