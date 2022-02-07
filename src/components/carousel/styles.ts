import { css } from '@emotion/react'

export const container = css`
  width: 65%;
  height: auto;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
`
export const img = css`
  width: 100%;
  height: 100%;
`

export const carouselItem = css`
  flex-shrink: 0;
  scroll-snap-align: start;
  width: 100%;
  height: 100%;
`

export const text = css`
`