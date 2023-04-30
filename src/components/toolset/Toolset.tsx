/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import * as Style from './styles'
import React from 'react'
import MiniCard from '../minicard'
import Spacer from '../spacer'

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
      <h1>Toolset</h1>
      <Spacer y={12}/>
      <p>Frontend</p>
      <div css={Style.skillRow}>
        {
          props.tools.frontend.map((tool, idx)=>
            <MiniCard key={idx} css={{margin: '6px'}} title={tool.name} imgSrc={tool.imgSrc}/>
          )
        }
      </div>
      <Spacer y={12}/>
      <p>Backend</p>
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