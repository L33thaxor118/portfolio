/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React from 'react'
import ProjectFrame from './projectframe/ProjectFrame'
import projectsJson from '../../../assets/projects.json'

export default function Projects() {
  const projects = projectsJson.map((project: any)=>{
    return (
      <ProjectFrame 
        key={project.title} 
        title={project.title} 
        summary={project.summary} 
        imageUrl={project.imageUrl} 
        tags={project.tags}
      />
    )
  })
  return (
    <div css={Style.container}>
      {projects}
    </div>
  )
}