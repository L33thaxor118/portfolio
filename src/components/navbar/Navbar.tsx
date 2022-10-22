/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const profileImage =
    <div css={Style.profileImgContainer}>
      <img
        css={Style.profileImg} 
        src={'/logo.svg'}
        onClick={()=>{}}
        />
        <h1>Azriel Alvarado</h1>
    </div>

  const navLinks = [
    <Link key={1} css={Style.listItemText} to="/">whoami</Link>,
    <Link key={2} css={Style.listItemText} to="/projects">projects</Link>,
    <a key={3} href="resume.pdf" style={{textDecoration: 'none'}} type={'application/pdf'} target="_blank">
      <p css={Style.listItemText}>resume</p>
    </a>,
    <Link key={4} css={Style.listItemText} to="/log">log</Link>
  ]
  return (
    <div css={Style.sidebar}>
      {profileImage}
      <div css={Style.listItemContainer}>
        {navLinks}
      </div>
    </div>
  )
}