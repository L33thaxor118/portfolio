/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'
import { VscGithub } from 'react-icons/vsc'
import { Text, TextStyle } from '../text'
import * as Style from './styles'

export default function Contact() {
  return (
    <div css={Style.container}>
      <Text style={TextStyle.h2}>Get in touch</Text>
      <div css={Style.iconsContainer}>
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