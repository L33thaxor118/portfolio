/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import * as Style from './styles'

export default function WhoAmI() {
  return (
    <div css={Style.content}>
      <h1 css={Style.title}>About Me</h1>
      <p css={Style.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <h1 css={Style.title}>Contact</h1>
      
    </div>
  )
}