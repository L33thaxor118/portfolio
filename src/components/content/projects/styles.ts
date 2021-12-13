import { css } from '@emotion/react'

export const container = css`
  display: grid;
  padding: 20px;
  width: 100%;
  height: 100%;
  grid-template-columns: [one] auto [two] auto;
  grid-template-rows: [three] auto [there] auto;
`