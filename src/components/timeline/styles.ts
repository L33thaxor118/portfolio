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
  align-items: ${isLeft ? 'flex-end' : 'flex-start'};
`

export const eventImage = css`
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  max-width: 80%;
`

export const eventSpacer = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
  padding-right: 20px;
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
  min-height: 20px;
  max-height: 20px;
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
  transition-duration: 0.5s;
`

export const line = css`
  width: 3px;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  position: relative;
`

export const progressline = (finished: boolean, selected: boolean, height: number) => css`
  width: 3px;
  position: absolute;
  height: ${finished ? '100%' : selected ? height + 'px' : 0 + 'px'};
  max-height: 100%;
  background-color: var(--theme-color-accent);
  border-radius: 10px;
`