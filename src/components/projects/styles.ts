import { css, keyframes } from '@emotion/react'

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const projectPreviewContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 100px;
  max-width: 865px;
  height: 350px;
  @media (max-width: 900px) {
    margin-bottom: 70px;
    height: auto;
  }
`

export const projectPreviewDetailsContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 310px;
  box-sizing: border-box;
  padding: 10px;
`

export const projectPreviewImage = css`
  height: 350px;
  width: 565px;
  border-radius: 12px;
`