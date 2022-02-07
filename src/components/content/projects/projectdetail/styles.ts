import { css } from '@emotion/react'

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--default-padding-top);
  padding-left: var(--default-padding-sides);
  padding-right: var(--default-padding-sides);
`

export const text = css`
  color: white;
`
export const description = css`
  color: white;
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
  width: 100%;
`
export const title = css`
  color: white;
  margin-bottom: 30px;
  font-size: 40px;
`