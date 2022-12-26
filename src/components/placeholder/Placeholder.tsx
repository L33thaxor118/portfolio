/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import * as Style from './styles'

export default function Placholder() {
  const [ellipsis, setEllipsis] = useState('')

  useEffect(() => {
    const interval = setInterval(() => 
      setEllipsis((prev)=>
        prev === '...' ? '' : (prev + '.')
      ), 
    500);
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <div css={Style.container}>
      <h1 css={Style.title}>{`Coming soon${ellipsis}`}</h1>
    </div>
  )
}