/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import * as React from 'react'
import Content from './components/content'
import Navbar from './components/navbar'

export default function App() {
  return (
    <div css={style}>
      <Navbar/>
      <Content/>
    </div>
  )
}

const style = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--theme-color-primary);
`