/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React, {useRef, useLayoutEffect, useState, ReactElement, ReactNode} from 'react'

interface PropTypes {
  x: number, 
  y: number,
  idx: number,
  selected: boolean,
  rotationDegrees: number,
  children?: ReactNode,
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
      left: props.x - dimensions.width,//to place view's center at given x, y 
      top: props.y - dimensions.height,//to place view's center at given x, y
      transform: `rotate(${-1*props.rotationDegrees}deg)`,
      transformOrigin: `center`,
      opacity: props.selected ? "100%" : "40%",
      transition: 'transform 1s, opacity 1s'
    }}>
      {props.children}
    </div>
  )
}