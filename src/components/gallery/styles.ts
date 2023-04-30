import { css } from '@emotion/react'

export const container = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`

export const img = css`
  height: 200px;
  border-radius: 10px;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
`