import { css } from '@emotion/react'

export const container = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  background-color: gold;
`

export const list = css`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 89vh;
  align-items: center;
  border-style: solid;
  border-width: 4px;
  overflow-y: scroll;
  background-color: red;
  scroll-snap-type: y mandatory;
`

export const focus = css`
  position: absolute;
  width: 50%;
  height: auto;
  padding-top: 50%;
  border-style: solid;
  border-radius: 100%;
`

export const preview = (first: Boolean = false, last: Boolean = false) => css`
  scroll-snap-align: center;
  width: 40%;
  height: auto;
  padding-top: 40%;
  border-style: solid;
  border-radius: 100%;
  display: flex;
  align-items: center; 
  margin-top: ${first ? 150 : 20}%;
  margin-bottom: ${last ? 150 : 20}%;
  justify-content: center;
`
