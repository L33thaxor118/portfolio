import { css } from '@emotion/react'

export const h1Style = (altColor: boolean) => css`
    font-family: var(--font-family-secondary);
    font-weight: 800;
    font-size: 42px;
    color: ${altColor ? 'var(--theme-color-primary)' : 'white'};
  `

export const h2Style = (altColor: boolean) => css`
    font-family: var(--font-family-secondary);
    font-weight: 400;
    font-size: 28px;
    color: ${altColor ? 'var(--theme-color-primary)' : 'white'};
  `
  
export const bodyStyle = (altColor: boolean) => css`
    font-family: var(--font-family-primary);
    font-weight: 300;
    font-size: 24px;
    color: ${altColor ? 'var(--theme-color-primary)' : 'white'};
    opacity: 80%;
  `