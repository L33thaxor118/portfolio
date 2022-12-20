/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React from 'react'
import content from '../../assets/content.json'
import { Text, TextStyle } from '../text'

export default function Projects() {
  return (
    <div css={Style.container}>
      <Text style={TextStyle.h1}>Stuff I've built</Text>
      {
        content.projects.map((project, idx)=>
          <h1 key={idx}>{project.title}</h1>
        )
      }
    </div>
  )
}