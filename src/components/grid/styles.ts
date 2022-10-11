import { css } from '@emotion/react'

export const container = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  box-sizing: border-box;
`

export const projectContainer = (src: string) => css`
  position: relative;
  z-index: 0;
  flex-grow: 1;
  cursor: pointer;
  color: white;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  &:hover {
  }
`

export const textContainer = css`
  color: white;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

export const imageContainer = (src: string) => css`
  background-image: url(${src});  
  background-size: 100%;
  width: 110%;
  height: 110%;
  margin-top: -10px;
  position: absolute;
  filter: brightness(35%) blur(5px);
  z-index: 0;
`

export const text = css`
  padding: 0px 15px 15px 15px;
  text-align: center;
  font-size: var(--font-size-small);
`

export const tagsContainer = css`
  position: relative;
  bottom: 10%;
  width: 100%;
  height: auto;
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  justify-content: center;
  flex-wrap: wrap;
`