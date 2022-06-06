import { css } from '@emotion/react'

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 60px 20px;
`
export const sectionContainer = css`
  width: 100%;
  max-width: var(--text-content-max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`
export const title = css`
  font-family: var(--font-family-secondary);
  color: white;
  font-size: var(--font-size-xlarge);
  margin-bottom: 30px;
`
export const subtitle = css`
font-family: var(--font-family-secondary);
  color: white;
  font-size: var(--font-size-large);
  margin-bottom: 30px;
`
export const text = css`
  color: white;
  font-size: 1.125rem;
  line-height: var(--text-line-height);
  margin-bottom: 30px;
`
export const carousel = css`
`
export const listItem = css`
  color: white;
`
export const list = css`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  font-size: 1.125rem;
  line-height: var(--text-line-height);
  align-self: start;
`