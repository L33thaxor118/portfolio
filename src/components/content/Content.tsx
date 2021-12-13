/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'
import Projects from './projects'
import WhoAmI from './whoami'
import { Routes, Route } from 'react-router-dom';

export default function Content() {
  return (
    <div css={content}>
      <Routes>
        <Route path="/" element={<WhoAmI/>}/>
        <Route path="projects" element={<Projects/>} />
      </Routes>
    </div>
  )
}

const content = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 3;
  background-color: var(--theme-color-primary);
  font-family: var(--font-family-title);
`

const divider = css`
  margin-top: 10px;
  margin-bottom: 10px;
`