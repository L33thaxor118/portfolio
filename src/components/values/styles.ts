import { css } from '@emotion/react'

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`


export const valuesContainer = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`

export const valueItemContainer = css`
  display: flex;
  flex-direction: row;
  width: 30%;
  padding: 20px;
`

export const valueTextContainer = css`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const valueItemIcon = css`
  color: white;
  width: 75px;
  height: 75px;
  opacity: 80%;
  margin-right: 15px;
`