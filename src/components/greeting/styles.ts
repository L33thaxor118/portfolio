import { css } from '@emotion/react'

export const container = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const textContainer = css`
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }
`

export const title = css`
  font-family: var(--font-family-secondary);
  margin-bottom: 20px;
  color: white;
`

export const title2 = css`
  margin-top: 100px;
  font-family: var(--font-family-secondary);
  margin-bottom: 20px;
  color: white;
`

export const body = css`
  color: white;
  font-size: var(--font-size-medium);
  line-height: var(--text-line-height);
`

export const img = css`
  border-radius: 100%;
  margin-left: 5%;
  width: 260px;
  height: 250px;
`