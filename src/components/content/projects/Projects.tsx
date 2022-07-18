/** @jsx jsx */
import { jsx } from '@emotion/react'
import { css } from '@emotion/react'
import * as Style from './styles'
import React, {useRef, useLayoutEffect, useState} from 'react'
import ProjectFrame from './projectframe/ProjectFrame'
import projectsJson from '../../../assets/projects.json'
import Cylinder, {CylinderViewable} from '../../cylinder/Cylinder'
import Chip from '../../chip'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import ProjectDetail from './projectdetail'
import { useMediaQuery } from 'react-responsive'
import Grid from '../../grid'
import { mod } from '../../../utils/mathutils'

export default function Projects() {
  let routeParams = useParams()
  let navigate = useNavigate()

  const isLargeScreen = useMediaQuery({ query: '(min-width: 850px)' })
  
  // We shift in order to mantain previous selection
  const prevSelectedIdx = parseInt(window.sessionStorage.getItem("prevSelectedIdx"))
  const shiftedProjects = projectsJson.slice(prevSelectedIdx).concat(projectsJson.slice(0, prevSelectedIdx))

  const projects: CylinderViewable[] = shiftedProjects.map((project, idx)=>{
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
          }}
          onClick={()=>{navigate(`/projects/${project.title.toLowerCase()}`)}}>
          <h1 style={{alignContent: 'center', margin: '5px', fontFamily: 'var(--font-family-secondary)'}}>{project.title}</h1>
          <p style={{padding: '0px 15px 15px 15px', textAlign: 'center'}}>{project.summary}</p>
          <div css={Style.tagsContainer}>
            {
              project.tags.map((tag)=>
                <Chip style={Style.tag(tag)} key={tag}>{tag}</Chip>
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
          <div css={Style.container}>
            { isLargeScreen ? 
              <Cylinder radius={300} onSelect={(idx)=>{
                const prev = (prevSelectedIdx >= 0) ? prevSelectedIdx : 0
                const next = mod((prev + idx), projectsJson.length)
                window.sessionStorage.setItem("prevSelectedIdx", next.toString())
                }}>
                {
                  projects
                }
              </Cylinder> : 
              <Grid projects={projectsJson.map((project)=>{ 
                return {
                  title: project.title,
                  tags: project.tags,
                  description: project.summary,
                  imgSrc: project.imageUrl
                }
              })}/>
            }
          </div>
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