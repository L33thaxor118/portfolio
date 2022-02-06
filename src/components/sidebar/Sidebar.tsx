/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'

export default function Sidebar() {
  const [currImage, setCurrImage] = useState<number>(0)

  function getCurrentImageUrl(): string {
    switch(currImage) {
      case 1: return `/alien_blue.png`
      case 2: return `/alien_me.png`
      default: return `/alien.jpeg`
    }
  }

  return (
    <div css={Style.sidebar}>
      <div css={Style.profileImgContainer}>
        <img 
          css={Style.profileImg} 
          src={getCurrentImageUrl()}
          onClick={()=>{setCurrImage(prev=>(prev+1)%3)}}
          />
        <p css={Style.imageNote}>
          {currImage === 1 ? "(my dog)" : currImage === 2 ? "(me)" : ""}
        </p>
      </div>
      <Link css={Style.listItemText} to="/">whoami</Link>
      <Link css={Style.listItemText} to="/projects">projects</Link>
      <a href="resume.pdf" style={{textDecoration: 'none'}} download>
        <p css={Style.listItemText}>resume</p>
      </a>
      <Link css={Style.listItemText} to="/log">log</Link>
    </div>
  )
}