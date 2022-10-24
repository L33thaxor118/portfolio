import { css } from '@emotion/react'

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  width: 100%;
`

export const sectionContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

export const eventContentContainer = (isFocused: boolean, isLeft: boolean) => css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  opacity: ${isFocused ? 1 : 0.25};
  transition-property: opacity;
  transition-duration: 1s;
  text-align: ${isLeft ? 'right' : 'left'};
`

export const lineContainer = css`
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
`

export const point = (selected: boolean) => css`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border-style: solid;
  border-color: white;
  border-width: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const innerPoint = (isSelected: boolean) => css`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: var(--theme-color-accent);
  opacity: ${isSelected ? '1' : '0'};
  transition-property: opacity;
  transition-delay: ${isSelected ? '1' : '0'}s;
  transition-duration: 0.3s;
`

export const line = css`
  width: 3px;
  height: 85%;
  background-color: white;
  border-radius: 10px;
`

export const progressline = (finished: boolean) => css`
  width: 3px;
  height: ${finished ? 100 : 0}%;
  background-color: var(--theme-color-accent);
  border-radius: 10px;
  transition-property: height;
  transition-duration: 1s;
`