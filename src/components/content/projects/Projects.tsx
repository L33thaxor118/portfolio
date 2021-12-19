/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React, {useRef, useLayoutEffect, useState} from 'react'
import ProjectFrame from './projectframe/ProjectFrame'
import projectsJson from '../../../assets/projects.json'
import Cylinder from '../../cylinder/Cylinder'

export default function Projects() {

  const projects: JSX.Element[] = projectsJson.map((project)=>{
    return <ProjectFrame 
      key={project.title}
      imageUrl={project.imageUrl} 
      title={project.title} 
      summary={project.summary} 
      tags={project.tags}/>
  })
  return (
    <div css={Style.container}>
      <Cylinder radius={300}>
        {
          projects
        }
      </Cylinder>
    </div>
  )
}