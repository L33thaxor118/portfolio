/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Greeting from '../greeting'
import Toolset from '../toolset'
import Timeline from '../timeline'
import Spacer from '../spacer'
import contentJson from '../../assets/content.json'
import Contact from '../contact'
import Projects from '../projects'
import { Text, TextStyle } from '../text'

export default function Home() {
  return (
    <div css={Style.container}>
      <Spacer y={50}/>
      <Greeting/>
      <Spacer y={50}/>
      <Toolset/>
      <Spacer y={100}/>
      <Text style={TextStyle.h1}>Where I've been</Text>
      <Spacer y={50}/>
      <Timeline events={contentJson.timelineEvents}/>
      <Spacer y={100}/>
      <Projects projects={contentJson.projects}/>
      <Spacer y={50}/>
      <Contact/>
    </div>
  )
}