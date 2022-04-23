import { css } from '@emotion/react'

export const container = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`

export const list = css`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 89vh;
  @media (max-width: 485px) {
    height: 83vh;
  }
  align-items: center;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  ::-webkit-scrollbar {display:none;}
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
