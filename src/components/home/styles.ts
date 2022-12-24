import { css } from '@emotion/react'

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(var(--theme-color-tertiary), var(--theme-color-primary));
  font-family: var(--font-family-primary);
  padding: 0px 15%;
  align-self: center;
`

export const footer = css`
  width: 100%;
  background: var(--theme-color-tertiary);
`
