import { css } from '@emotion/react'

export const container = css`
  position: absolute;
  top: -10%;
  height: 110%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 485px) {
    top: -15%;
    height: 115%;
  }
  overflow-y: hidden;
`

export const list = css`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
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
  overflow: hidden;
  display: flex;
  flex-direction: column;
`


export const focusTop = css`
  background-color: red;
  width: 10px;
  height: 10px;
`

export const focusBottom = css`
  background-color: blue;
  width: 10px;
  height: 10px;
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
  margin-top: ${first ? 250 : 20}%;
  margin-bottom: ${last ? 250 : 20}%;
  justify-content: center;
`
