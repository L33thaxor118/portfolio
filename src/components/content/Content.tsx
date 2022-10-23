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

export default function Content() {
  return (
    <div css={Style.content}>
      <Greeting/>
      <Toolset/>
    </div>
  )
}