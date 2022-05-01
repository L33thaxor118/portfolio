/** @jsx jsx */
import { css, jsx } from '@emotion/react'
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
      <img css={css`
        ${Style.image}; 
        filter: blur(${props.selected ? 0 : 2}px);
        border-style: ${props.selected ? 'solid' : 'none'};
        border-color: black;
        border-width: 1.5px;
        opacity: ${props.selected ? 100 : 40}%;
        transition: opacity 2s;
        &:hover {
          transition: opacity 0.5s;
          filter: none;
          opacity: 100%;
        }`
        } 
        src={props.imageUrl}/>
    </div>
  )
}