/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import * as Style from './styles'
import React, { useMemo, useState } from 'react'
import Carousel from '../carousel'
import { DiGithubAlt } from 'react-icons/di'
import Chip from '../chip'
import { useParams } from 'react-router-dom'
import contentJson from '../../assets/content.json'
import { getProjectPathFromTitle } from '../../utils/stringutils'


export default function ProjectDetail() {
  const params = useParams()
  const projectPath = params['*']
  const project = useMemo(()=>contentJson.projects.find((project)=> {
    return getProjectPathFromTitle(project.title) === projectPath
  }), [])
  
  return (
    <div css={Style.container}>
      <div css={Style.titleContainer}>
        <h1 css={Style.title}>{project.title}</h1>
        {
          project?.repoUrl && 
          <a style={{textDecoration: 'none'}} href={project?.repoUrl} target="_blank">
            <Chip>
              <DiGithubAlt css={Style.githubicon}/>
              <p>Code</p>
            </Chip>
          </a>
        }
      </div>
      {
        project.sections.map((section: any, idx: number)=><Section key={idx} section={section}/>)
      }
    </div>
  )
}


interface SectionPropTypes {
  section: any
}

function Section(props: SectionPropTypes) {
  let routeParams = useParams()

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