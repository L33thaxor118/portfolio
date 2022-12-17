/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React from 'react'
import Projects from './projects'
import WhoAmI from './whoami'
import { Routes, Route } from 'react-router-dom';
import Placholder from './placeholder'
import Greeting from '../greeting'
import Toolset from '../toolset'
import Timeline from '../timeline'
import Spacer from '../spacer'
import contentJson from '../../assets/content.json'
import Values from '../values'
import Contact from '../contact'

export default function Content() {
  return (
    <div css={Style.content}>
      <Spacer y={50}/>
      <Greeting/>
      <Spacer y={50}/>
      <Toolset/>
      <Spacer y={100}/>
      <Timeline events={contentJson.timelineEvents}/>
      <Spacer y={100}/>
      <Values/>
      <Spacer y={100}/>
      <Contact/>
    </div>
  )
}