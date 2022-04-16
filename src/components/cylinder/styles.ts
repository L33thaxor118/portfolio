import { css } from '@emotion/react'

export const container = css`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media (max-height: 910px) {
    margin-top: 50px;
  }
  @media (max-height: 810px) {
    margin-top: 100px;
  }
  @media (max-height: 710px) {
    margin-top: 150px;
  }
  @media (max-height: 610px) {
    margin-top: 200px;
  }
`

export const cylinderContainer = (rotationDeg: number) => css`
  position: relative;
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