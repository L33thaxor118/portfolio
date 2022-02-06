/** @jsx jsx */
import { jsx } from '@emotion/react'
import { css } from '@emotion/react'
import * as Style from './styles'
import React, {useRef, useLayoutEffect, useState} from 'react'
import ProjectFrame from './projectframe/ProjectFrame'
import projectsJson from '../../../assets/projects.json'
import Cylinder, {CylinderViewable} from '../../cylinder/Cylinder'
import Chip from '../../chip'
import { Route, Routes, useParams } from 'react-router-dom'
import ProjectDetail from './projectdetail'

export default function Projects() {
  let routeParams = useParams()

  const projects: CylinderViewable[] = projectsJson.map((project, idx)=>{
    return {
      preview: (selected) => <ProjectFrame 
        key={project.title}
        imageUrl={project.imageUrl} 
        title={project.title} 
        summary={project.summary}
        selected={selected}
        tags={project.tags}/>,
      info: (
        <div style={{
          display: "flex", 
          flexDirection: "column",
          alignItems: "center"
          }}>
          <h1 style={{alignContent: 'center', margin: '10px'}}>{project.title}</h1>
          <p style={{padding: '10px'}}>{project.summary}</p>
          <div style={{width: '100px', height: '100px', marginTop: '20px'}}>
            {
              project.tags.map((tag)=>
                <Chip style={css`margin: 2px`} key={tag} text={tag}/>
              )
            }
          </div>
        </div>
      )
    }
  })
  return (
    <div css={Style.container}>
      <Routes>
        <Route path="/" element={
          <Cylinder radius={300}>
            {
              projects
            }
          </Cylinder>
        }/>
        <Route path=":projectName" element={
          <ProjectDetail project={
            projectsJson.find(item => item.title.toLowerCase() === routeParams["*"])
          }/>
        }/>
      </Routes>
    </div>
  )
}