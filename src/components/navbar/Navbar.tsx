/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Text, TextStyle } from '../text'
import { useMediaQuery } from 'react-responsive'
import { HashLink } from 'react-router-hash-link'

export default function Navbar() {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 800px)' })

  const profileImage =
    <div css={Style.profileImgContainer}>
      <img
        css={Style.profileImg} 
        src={'/logo.svg'}
        onClick={()=>{}}
        />
        {isLargeScreen && <Text css={Style.titleText} style={TextStyle.h1}>Azriel Alvarado</Text>}
    </div>

  const navLinks = [
    <Link key={1} css={Style.listItemText} to="/">whoami</Link>,
    <HashLink key={2} css={Style.listItemText} to="#projects">projects</HashLink>,
    <a key={3} href="resume.pdf" style={{textDecoration: 'none'}} type={'application/pdf'} target="_blank">
      <p css={Style.listItemText}>resume</p>
    </a>
  ]
  return (
    <div css={Style.container}>
      {profileImage}
      <div css={Style.listItemContainer}>
        {navLinks}
      </div>
    </div>
  )
}