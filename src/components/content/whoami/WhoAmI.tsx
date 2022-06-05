/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import * as Style from './styles'
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai'
import { VscGithub } from 'react-icons/vsc'
import { GiPlantRoots } from 'react-icons/gi'

export default function WhoAmI() {
  return (
    <div css={Style.content}>
      <h1 css={Style.title}>Hi! I'm Azriel</h1>
      <p css={Style.body}>I'm a Software Developer with a passion for Android and a burning curiosity for just about everything else. My Android skills pay the bills but I'm a tolerable web dev when I'm in the mood.</p>
      <br/>
      <p css={Style.body}>Since most people ask... My favorite programming languages are <span style={{color: 'orange'}}>Kotlin</span> and <span style={{color: 'lightblue'}}>Typescript</span>. I'm also a fan of <span style={{color: 'orangered'}}>Swift</span>'s protocol-orientedness but I don't use it much.</p>
      <br/>
      <GiPlantRoots css={Style.roots}/>
      <p css={Style.body}>My roots? I hail from Panama and the Windy City. Educated at U of I @ Urbana-Champaign and Oakton Community College.</p>
      <h1 css={Style.title2}>Get in touch</h1>
      <div css={Style.contact}>
        <a href='https://www.linkedin.com/in/azriel-alvarado-105894182/' target="_blank">
          <AiOutlineLinkedin css={Style.icon1}/>
        </a>
        <a href='https://github.com/L33thaxor118' target="_blank">
          <VscGithub css={Style.icon2}/>
        </a>
        <a href='mailto: alvarado_118@yahoo.com' target="_blank">
          <AiOutlineMail css={Style.icon1}/>
        </a>
      </div>
    </div>
  )
}