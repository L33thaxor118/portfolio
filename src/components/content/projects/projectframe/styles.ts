import { css } from '@emotion/react'

export const frame = (selected: boolean) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${selected ? 'border-style: solid' : 'border-style: none'}
`

export const image = css`
  border-radius: 100%;
  width: 200px;
  height: 200px;
`

export const title = css`
  margin-top: 10px;
`

export const tagsContainer = css`
  display: flex;
  flex-direction: row;
  gap: 5px;
`