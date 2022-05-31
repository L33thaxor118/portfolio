/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import * as Style from './styles'
import React from 'react'
import Carousel from '../../../carousel'

interface PropTypes {
  project: any,
}

interface SectionPropTypes {
  section: any
}

function Section(props: SectionPropTypes) {
  return (
    <div css={Style.sectionContainer}>
      {props.section.subtitle && <h1 css={Style.subtitle}>{props.section.subtitle}</h1>}
      {props.section.text && <h3 css={Style.text}>{props.section.text}</h3>}
      {props.section.list && <div css={Style.list}>
        {
          props.section.list?.map((item: any, idx: number)=>
            <li key={idx} css={Style.listItem}>{item}</li>
          )
        }
      </div>
      }
      {props.section.imageUrls && <Carousel style={Style.carousel} imageUrls={props.section.imageUrls}/>}
    </div>
  )
}

export default function ProjectDetail(props: PropTypes) {
  return (
    <div css={Style.container}>
      <h1 css={Style.title}>{props.project?.title}</h1>
      {
        props.project.sections.map((section: any, idx: number)=><Section key={idx} section={section}/>)
      }
    </div>
  )
}