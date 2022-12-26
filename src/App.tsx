/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import * as React from 'react'
import Home from './components/home'
import Navbar from './components/navbar'
import { Routes, Route } from 'react-router-dom';
import Placeholder from './components/placeholder';

export default function App() {
  return (
    <div css={style}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<Placeholder/>}/>
      </Routes>
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