import { css } from '@emotion/react'

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 100px 20px;
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
  color: white;
  font-size: 45px;
  margin-bottom: 30px;
`
export const subtitle = css`
  color: white;
  font-size: 30px;
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