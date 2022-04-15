/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import * as React from 'react'
import Content from './components/content'
import Sidebar from './components/sidebar'

export default function App() {
  return (
    <div css={style}>
      <Sidebar/>
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