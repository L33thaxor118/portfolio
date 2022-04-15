import { css } from '@emotion/react'

export const sidebar = css`
  display: flex;
  flex: 0;
  flex-direction: row;
  @media (max-width: 485px) {
    flex-direction: column;
    flex: 0;
  }
  align-items: center;
  background-color: var(--theme-color-secondary);
  font-family: var(--font-family-title);
`

export const profileImg = css`
  width: 100px;
  height: 100px;
  @media (max-height: 960px) {
    width: 70px;
    height: 70px;
    margin: 10px;
  }
  border-radius: 25%;
  margin: 20px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 485px) {
    margin: 5px;
    width: 80px;
    height: 80px;
  }
`

export const profileImgContainer = css`
  margin-top: 0;
  display: flex;
  flex-direction: column;
`

export const imageNote = css`
  margin-top: 0px;
  margin-bottom: 0px;
  height: 0px;
  text-align: center;
`

export const listItemText = css`
  margin: 10px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    color: green;
  }
`

export const listItemContainer = css`
  display: flex;
`