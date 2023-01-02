/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import * as Style from './styles'

interface PropTypes {
  items: Array<GalleryItem>
}

interface GalleryItem {
  assetUrl: string,
  isVideo: boolean
}

export default function Gallery(props: PropTypes) {
  return (
    <div css={Style.container}>
      {
        props.items?.map((item, idx)=>
          <a key={idx} href={item.assetUrl}>
            <img css={Style.img} src={item.assetUrl}/>
          </a>
        )
      }
    </div>
  )
}