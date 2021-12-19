/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React, {useRef, useLayoutEffect, useState, ReactElement} from 'react'
import Chip from '../../../chip'

interface PropTypes {
  title: string,
  summary: string,
  imageUrl: string,
  tags: string[]
}

export default function ProjectFrame(props: PropTypes) {

  return (
    <div css={Style.frame}>
      <img css={Style.image} src={props.imageUrl}/>
    </div>
  )
}