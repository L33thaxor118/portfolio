/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React, {useRef, useLayoutEffect, useState, ReactElement} from 'react'
import Chip from '../../../chip'

interface PropTypes {
  title: string,
  summary: string,
  imageUrl: string,
  tags: string[],
  selected: boolean
}

export default function ProjectFrame(props: PropTypes) {

  return (
    <div css={Style.frame(props.selected)}>
      <img css={Style.image} src={props.imageUrl}/>
    </div>
  )
}