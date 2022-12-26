import { css } from '@emotion/react'

export const container = css`
  display: flex;
  flex-direction: column;
`

export const body = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(var(--theme-color-tertiary), var(--theme-color-primary));
  font-family: var(--font-family-primary);
  padding: 0px 15%;
  @media (max-width: 1000px) {
    padding: 0px 5%;
  }
  align-self: center;
`

export const footer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--theme-color-tertiary);
`
