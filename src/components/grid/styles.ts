import { css } from '@emotion/react'

export const container = css`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  align-items: flex-start;
  box-sizing: border-box;
`

export const projectContainer = (src: string) => css`
  z-index: 0;
  background-image: url(${src});
  flex-grow: 1;
  cursor: pointer;
  color: white;
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-color: black;
  border-width: 1.5px;
  border-radius: 5px;
  padding: 10px;
  transition: padding 0.5s, width 0.5s, height 0.5s;
  &:hover {
    padding: 15px;
  }
`

export const tagsContainer = css`
  width: 100%;
  height: auto;
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  justify-content: center;
  flex-wrap: wrap;
`