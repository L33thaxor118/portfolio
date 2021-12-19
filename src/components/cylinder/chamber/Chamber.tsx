/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React, {useRef, useLayoutEffect, useState, ReactElement} from 'react'

interface PropTypes {
  x: number, 
  y: number,
  idx: number,
  children?: React.ReactNode,
}

export default function Chamber(props: PropTypes) {
  const container = useRef(null);
  const [dimensions, setDimensions] = useState({ width:0, height: 0 });

  useLayoutEffect(() => {
    if (container.current) {
      setDimensions({
        width: container.current.clientWidth / 2,
        height: container.current.clientHeight / 2
      });
    }
  }, []);

  return (
    <div ref={container} style={{
      position:"absolute",
      width: "auto",
      height: "auto",
      left: props.x - dimensions.width/2,//to place view's center at given x, y 
      top: props.y - dimensions.height/2,//to place view's center at given x, y 
      transition: "left 2s, top 2s"
    }}>
      {props.children}
    </div>
  )
}