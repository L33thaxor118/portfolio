/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React, { ReactElement } from 'react'
import Chip from '../../../chip'

interface PropTypes {
  title: string,
  summary: string,
  imageUrl: string,
  tags: [string]
}

export default function ProjectFrame(props: PropTypes) {
  const tags = props.tags.map((tag)=>
    <Chip text={tag}/>
  )
  return (
    <div css={Style.frame}>
      <img css={Style.image} src={props.imageUrl}/>
      <h2 css={Style.title} >{props.title}</h2>
      <h4>{props.summary}</h4>
      <div css={Style.tagsContainer}>
        {tags}
      </div>
    </div>
  )
}