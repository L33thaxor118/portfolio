/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import * as Style from './styles'
import React, { ReactNode } from 'react'

interface PropTypes {
  className?: string,
  children?: ReactNode,
  onClick?: ()=>void,
  url?: string
}

export default function Button(props: PropTypes) {
  return (
    <a href={props.url}>
      <button onClick={()=>{props.onClick()}} className={props.className} css={Style.button}>{props.children}</button>
    </a>
  )
}