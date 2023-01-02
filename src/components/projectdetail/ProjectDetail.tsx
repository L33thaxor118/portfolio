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
import Gallery from '../gallery/Gallery'
import Spacer from '../spacer/Spacer'


export default function ProjectDetail() {
  const params = useParams()
  const projectPath = params['*']
  const project = useMemo(()=>contentJson.projects.find((project)=> {
    return getProjectPathFromTitle(project.title) === projectPath
  }), [])

  const galleryItems = project.galleryUrls?.map((url: string)=>{return {assetUrl: url, isVideo: false}})
  
  return (
    <div css={Style.container}>
      <div css={Style.introContainer}>
        <h1>{project.title}</h1>
        <p>{project.intro}</p>
      </div>
      <Spacer y={50}/>
      <div css={Style.contentContainer}>
        <AdditionalInfo/>
        <div css={Style.sectionsContainer}>
          {
            project.sections.map((section: any, idx: number)=><Section key={idx} section={section}/>)
          }
        </div>
      </div>
      <Spacer y={50}/>
      <Gallery items={galleryItems}/>
    </div>
  )
}

function AdditionalInfo() {
  return (
    <div css={Style.additionalInfoContainer}>
      <h2>Links</h2>
      <Chip>hi</Chip>
      <Chip>hi</Chip>
      <Chip>hi</Chip>
    </div>
  )
}

interface SectionPropTypes {
  section: any
}

function Section(props: SectionPropTypes) {
  return (
    <div css={Style.sectionContainer}>
      {props.section.subtitle && <h2>{props.section.subtitle}</h2>}
      {props.section.text && <h1>{props.section.text}</h1>}
      {props.section.list && <div css={Style.list}>
        {
          props.section.list?.map((item: any, idx: number)=>
            <li key={idx} css={Style.listItem}>{item}</li>
          )
        }
      </div>
      }
    </div>
  )
}