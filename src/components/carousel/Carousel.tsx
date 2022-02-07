/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import * as Style from './styles'
import React from 'react'
import { useNavigate } from 'react-router-dom';

interface PropTypes {
  imageUrls: [string],
  style?: SerializedStyles
}
export default function Carousel(props: PropTypes) {
  const images = props.imageUrls.map((url)=>(
    <a css = {Style.carouselItem} href={url}>
      <img css={Style.img} src={url}/>
    </a>
  ))
  return (
    <div css={css`${props.style}; ${Style.container};`}>
      {
        images
      }
    </div>
  )
}