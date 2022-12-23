/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Greeting from '../greeting'
import Toolset from '../toolset'
import Timeline from '../timeline'
import Spacer from '../spacer'
import contentJson from '../../assets/content.json'
import Contact from '../contact'
import Projects from '../projects';

export default function Home() {
  return (
    <div css={Style.container}>
      <Spacer y={50}/>
      <Greeting/>
      <Spacer y={50}/>
      <Toolset/>
      <Spacer y={50}/>
      <Timeline events={contentJson.timelineEvents}/>
      <Spacer y={50}/>
      <Spacer y={50}/>
      <Projects projects={contentJson.projects}/>
      <Spacer y={50}/>
      <Contact/>
    </div>
  )
}