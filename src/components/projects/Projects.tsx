/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React from 'react'
import { Text, TextStyle } from '../text'
import Button from '../button'
import Spacer from '../spacer'

interface Project {
  title: string,
  summary: string,
  imageUrl: string,
}

interface PropTypes {
  projects: Array<Project>
}

export default function Projects(props: PropTypes) {
  return (
    <div css={Style.container}>
      <Text style={TextStyle.h1}>Stuff I've built</Text>
      <Spacer y={50}/>
      {
        props.projects.map((project, idx)=>
          <ProjectPreview key={idx} project={project}/>
        )
      }
    </div>
  )
}

interface PreviewPropTypes {
  project: Project
}

function ProjectPreview(props: PreviewPropTypes) {
  return (
    <div css={Style.projectPreviewContainer}>
      <div css={Style.projectPreviewDetailsContainer}>
        <Text style={TextStyle.h2}>{props.project.title}</Text>
        <Text css={{textAlign: 'center', padding: '16px'}} style={TextStyle.body}>{props.project.summary}</Text>
        <Button>More Details</Button>
      </div>
      <img css={Style.projectPreviewImage} src={props.project.imageUrl}/>
    </div>
  )
}