import { css } from '@emotion/react'

export const container = css`
  position: relative;
  width: 100%;
  height: 100%;
`

export const cylinderContainer = (rotationDeg: number) => css`
  position: relative;
  width: 100%;
  height: 100%;
  transform: rotate(${rotationDeg}deg);
  transition: transform 1s;
`

export const selectedFrame = (x: number, y: number) => css`
  cursor: pointer;
  width: 250px;
  height: 250px;
  margin: auto;
  position: absolute;
  left: calc(${x}px - 128px);
  top: calc(${y}px - 128px);
  border-style: solid;
`