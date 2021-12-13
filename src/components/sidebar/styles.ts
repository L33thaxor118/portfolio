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
  padding: 20px;
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
