/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import { css } from '@emotion/react'
import React, {useState, ReactElement, ReactNode, useEffect, useRef, useLayoutEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Chip from '../chip'

interface PropTypes {
  projects: Array<GridViewable>
}

export interface GridViewable {
  title: string,
  tags: Array<string>,
  description: string,
  imgSrc: string
}

export default function Grid(props: PropTypes) {
    let navigate = useNavigate()

  return (
    <div css={Style.container}>
      {props.projects.map((project, idx)=>
        <div key={idx} css={Style.projectContainer(project.imgSrc)} onClick={()=>{navigate(`/projects/${project.title.toLowerCase()}`)}}>
          <h1 style={{alignContent: 'center', margin: '5px', fontFamily: 'var(--font-family-secondary)'}}>{project.title}</h1>
          <p style={{padding: '0px 15px 15px 15px', textAlign: 'center'}}>{project.description}</p>
          <div css={Style.tagsContainer}>
            {
              project.tags.map((tag)=>
                <Chip style={css`margin: 0px 2px`} key={tag} text={tag}/>
              )
            }
          </div>
        </div>
      )}
    </div>
  )
}