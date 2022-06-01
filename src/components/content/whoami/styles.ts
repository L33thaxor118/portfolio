import { css } from '@emotion/react'

export const content = css`
  display: flex;
  padding-left: var(--default-padding-sides);
  padding-right: var(--default-padding-sides);
  flex-direction: column;
  align-items: center;
  margin-top: var(--default-padding-top);
  max-width: var(--text-content-max-width);
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
  font-size: 2.5vh;
  line-height: var(--text-line-height);
`
export const icon1 = css`
  color: white;
  width: 90px;
  height: 90px;
  opacity: 80%;
  &:hover {
    transition: opacity 0.2s;
    opacity: 100%;
  }
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`
export const icon2 = css`
  color: white;
  width: 80px;
  height: 80px;
  opacity: 80%;
  &:hover {
    transition: opacity 0.2s;
    opacity: 100%;
  }
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`
export const contact = css`
  display: flex;
  align-items: center;
`