
import { css } from '@emotion/react'

export const container = css`
  display: flex;
  padding-left: var(--default-padding-sides);
  padding-right: var(--default-padding-sides);
  flex-direction: column;
  align-items: center;
  max-width: var(--text-content-max-width);
`

export const iconsContainer = css`
  display: flex;
  align-items: center;
  padding-bottom: 3vh;
  margin-top: 10px;
`

export const icon1 = css`
  color: white;
  width: 70px;
  height: 70px;
  opacity: 80%;
  &:hover {
    transition: opacity 0.2s;
    opacity: 100%;
  }
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`

export const icon2 = css`
  color: white;
  width: 60px;
  height: 60px;
  opacity: 80%;
  &:hover {
    transition: opacity 0.2s;
    opacity: 100%;
  }
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`