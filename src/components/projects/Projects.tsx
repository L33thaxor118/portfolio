/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React from 'react'
import Button from '../button'
import Spacer from '../spacer'
import { useMediaQuery } from 'react-responsive'
import { getProjectPathFromTitle } from '../../utils/stringutils'

interface Project {
  title: string,
  summary: string,
  imageUrl: string,
}

interface PropTypes {
  projects: Array<Project>
}

export default function Projects(props: PropTypes) {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 900px)' })
  
  return (
    <div id={'projects'} css={Style.container}>
      <h1>Stuff I've built</h1>
      <Spacer y={50}/>
      {
        props.projects.map((project, idx)=>
          <ProjectPreview showImage={isLargeScreen} key={idx} project={project}/>
        )
      }
    </div>
  )
}

interface PreviewPropTypes {
  project: Project
  showImage: boolean
}

function ProjectPreview(props: PreviewPropTypes) {
  const projectPath = getProjectPathFromTitle(props.project.title)
  return (
    <div css={Style.projectPreviewContainer}>
      <div css={Style.projectPreviewDetailsContainer}>
        <h2>{props.project.title}</h2>
        <p css={{textAlign: 'center', padding: '8px 16px 24px 16px'}}>{props.project.summary}</p>
        <Button url={`/${projectPath}`}>More Details</Button>
      </div>
      {props.showImage && <img css={Style.projectPreviewImage} src={props.project.imageUrl}/>}
    </div>
  )
}