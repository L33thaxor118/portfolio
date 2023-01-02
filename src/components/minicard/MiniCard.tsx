/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import { css } from '@emotion/react'
import React from 'react'

interface PropTypes {
  imgSrc: string
  title: string
  className?: string
}

export default function MiniCard(props: PropTypes) {

  return (
    <div css={Style.container} className={props.className}>
      <img css={Style.toolImage} src={props.imgSrc}/>
      <p css={css`color: var(--theme-color-primary)`}>{props.title}</p>
    </div>
  )
}