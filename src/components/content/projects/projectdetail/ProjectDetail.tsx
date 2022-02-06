/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React from 'react'

interface PropTypes {
  project: any,
}

export default function ProjectDetail(props: PropTypes) {
  return (
    <div css={Style.container}>
      <h1 css={Style.text}>{props.project?.title}</h1>
      <h3 css={Style.text}>{props.project?.details?.description}</h3>
    </div>
  )
}