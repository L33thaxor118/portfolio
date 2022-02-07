/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import * as Style from './styles'
import React from 'react'
import Carousel from '../../../carousel'

interface PropTypes {
  project: any,
}

export default function ProjectDetail(props: PropTypes) {
  return (
    <div css={Style.container}>
      <h1 css={Style.title}>{props.project?.title}</h1>
      <Carousel style={css`margin-bottom: 20px;`} imageUrls={props.project.details?.images}/>
      <h3 css={Style.description}>{props.project?.details?.description}</h3>
      <h1 css={Style.title}>Features</h1>
      <div css={Style.list}>
        {
          props.project?.details?.features?.map((feature: any)=>
            <li css={Style.listItem}>{feature}</li>
          )
        }
      </div>
      <h1 css={Style.title}>What I learned</h1>
      <div css={Style.list}>
        {
          props.project?.details?.learnings?.map((learning: any)=>
            <li css={Style.listItem}>{learning}</li>
          )
        }
      </div>
    </div>
  )
}