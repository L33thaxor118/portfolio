/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import * as Style from './styles'
import React from 'react'
import Carousel from '../carousel'
import { DiGithubAlt } from 'react-icons/di'
import Chip from '../chip'

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
      <div css={Style.titleContainer}>
        <h1 css={Style.title}>{props.project?.title}</h1>
        {
          props.project?.repoUrl && 
          <a style={{textDecoration: 'none'}} href={props.project?.repoUrl} target="_blank">
            <Chip>
              <DiGithubAlt css={Style.githubicon}/>
              <p>Code</p>
            </Chip>
          </a>
        }
      </div>
      {
        props.project.sections.map((section: any, idx: number)=><Section key={idx} section={section}/>)
      }
    </div>
  )
}