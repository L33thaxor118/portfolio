import { css } from '@emotion/react'

export const button = css`
  background-color: var(--theme-color-accent);
  border-radius: 12px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: white;
  padding: 6px 24px;
  font-family: var(--font-family-secondary);
  transition: opacity 0.3s;
  &:hover {
    opacity: 85%;
  }
  width: fit-content;
`