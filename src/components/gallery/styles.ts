import { css } from '@emotion/react'

export const container = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const img = css`
  width: auto;
  height: 200px;
  margin: 8px;
  border-radius: 10px;
  transition: height 0.5s;
  &:hover {
    height: 220px;
  }
`