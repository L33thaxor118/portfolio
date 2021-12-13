/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React, { useState } from 'react'
import profileImage from '../../assets/alien.jpeg'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div css={Style.sidebar}>
      <img css={Style.profileImg} src={profileImage}/>
      <Link css={Style.listItemText} to="/">whoami</Link>
      <Link css={Style.listItemText} to="/projects">projects</Link>
    </div>
  )
}