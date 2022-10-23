/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React from 'react'
import Projects from './projects'
import WhoAmI from './whoami'
import { Routes, Route } from 'react-router-dom';
import Placholder from './placeholder'
import Greeting from '../greeting'

export default function Content() {
  return (
    <div css={Style.content}>
      <Routes>
        <Route path="/" element={<Greeting/>}/>
        <Route path="projects/*" element={<Projects/>} />
        <Route path="log" element={<Placholder/>}/>
      </Routes>
    </div>
  )
}