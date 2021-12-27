/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'

export default function Sidebar() {
  const [currImage, setCurrImage] = useState("alien.jpeg")

  function meOrBlue(): "me" | "blue" {
    return (Math.random()*100)>50 ? "me" : "blue"
  }
  return (
    <div css={Style.sidebar}>
      <div style={{display: 'flex'}}>
        {
          currImage === "alien_blue.png" && <p>That's my dog</p>
        }
        <img 
          css={Style.profileImg} 
          src={currImage} 
          onMouseEnter={()=>{setCurrImage(`alien_${meOrBlue()}.png`)}}
          onMouseLeave={()=>{setCurrImage("alien.jpeg")}}
          />
        {
          currImage === "alien_me.png" && <p>That's me</p>
        }
      </div>
      <Link css={Style.listItemText} to="/">whoami</Link>
      <Link css={Style.listItemText} to="/projects">projects</Link>
    </div>
  )
}