import { css } from '@emotion/react'

export const container = css`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const cylinderContainer = (rotationDeg: number) => css`
  position: relative;
  width: 100%;
  height: 100%;
  transform: rotate(${rotationDeg}deg);
  transition: transform 1s;
`

export const selectedFrame = (expanded: boolean) => css`
  cursor: pointer;
  width: ${expanded ? "100%" : "250px"};
  height: ${expanded ? "100%" : "250px"};
  background-color: ${expanded ? 'var(--theme-color-primary)' : 'none'};
  z-index: 0;
  margin: auto;
  position: absolute;
  border-style: solid;
  transition: padding 0.5s, width 0.5s, height 0.5s;
  &:hover {
    padding: ${expanded ? "0px" : "10px"};
  }
`