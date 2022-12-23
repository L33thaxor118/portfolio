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
  justify-content: space-between;
  background-color: var(--theme-color-primary);
  font-family: var(--font-family-primary);
`

export const profileImg = css`
  width: 60px;
  height: 60px;
  margin: 10px 10px 10px 30px;
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
  flex-direction: row;
  align-items: center;
  color: white;
  font-family: var(--font-family-secondary);
  font-size: 12px;
  margin-left: 10px;
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
  color: white;
  font-size: var(--font-size-medium);
  &:hover {
    cursor: pointer;
    color: green;
  }
`

export const listItemContainer = css`
  display: flex;
  margin-right: 30px;
`