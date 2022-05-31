import { css } from '@emotion/react'

export const container = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const cylinderContainer = (rotationDeg: number) => css`
  position: relative;
  width: 850px;
  height: 850px;
  transform: rotate(${rotationDeg}deg);
  transition: transform 1s;
`

export const selectedFrame = (expanded: boolean) => css`
  cursor: pointer;
  color: white;
  width: ${expanded ? "100%" : "250px"};
  height: ${expanded ? "100%" : "250px"};
  background-color: ${expanded ? 'var(--theme-color-primary)' : 'none'};
  z-index: 0;
  margin: auto;
  position: absolute;
  border-style: solid;
  border-color: black;
  border-width: 1.5px;
  transition: padding 0.5s, width 0.5s, height 0.5s;
  &:hover {
    padding: ${expanded ? "0px" : "10px"};
  }
`