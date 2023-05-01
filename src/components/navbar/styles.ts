import { css } from '@emotion/react'

export const container = css`
  display: flex;
  flex: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--theme-color-primary);
  font-family: var(--font-family-primary);
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const profileImg = css`
  width: 60px;
  height: 60px;
  margin: 10px 10px 10px 30px;
  @media (max-width: 800px) {
    margin: 10px 0px 0px 0px;
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
    opacity: 85%;
  }
`

export const listItemContainer = css`
  display: flex;
  margin-right: 30px;
  @media (max-width: 800px) {
    margin: 0px;
  }
`

export const titleText = css`
  font-size: 40px;
  text-decoration: none;
  color: white;
  margin-left: 10px;
  font-family: 'Swanky and Moo Moo', cursive;
`