/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import * as Style from './styles'
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'

export default function WhoAmI() {
  return (
    <div css={Style.content}>
      <h1 css={Style.title}>Hi! I'm Azriel</h1>
      <p css={Style.body}>I'm a Software Developer and I love web + Android. I can code really slow in any language, but I'm pretty quick with Kotlin and Typescript.</p>
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