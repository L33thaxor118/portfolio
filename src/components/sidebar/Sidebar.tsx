/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { useState } from 'react'
import profileImage from '../../assets/alien.jpeg'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div css={sidebar}>
      <img css={profileImg} src={profileImage}/>
      <Link css={listItemText} to="/">whoami</Link>
      <Link css={listItemText} to="/projects">projects</Link>
    </div>
  )
}

const sidebar = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: var(--theme-color-secondary);
  font-family: var(--font-family-title);
`

const profileImg = css`
  width: 200px;
  height: 200px;
  border-radius: 25%;
  padding: 20px;
`

const listItemText = css`
  margin-bottom: 10px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    color: green;
  }
`
