import { css } from '@emotion/react'

export const sidebar = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: var(--theme-color-secondary);
  font-family: var(--font-family-title);
`

export const profileImg = css`
  width: 200px;
  height: 200px;
  border-radius: 25%;
  margin: 20px;
  &:hover {
    cursor: pointer;
  }
`

export const profileImgContainer = css`
  display: flex;
  flex-direction: column;
`

export const imageNote = css`
  margin-top: -15px;
  margin-bottom: 25px;
  height: 10px;
  text-align: center;
`

export const listItemText = css`
  margin-bottom: 10px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    color: green;
  }
`
