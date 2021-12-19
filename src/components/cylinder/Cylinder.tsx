/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React, {useRef, useState, useLayoutEffect} from 'react'
import Chamber from './chamber'

interface PropTypes {
  radius: number,
  children?: JSX.Element[]
}

export default function Cylinder(props: PropTypes) {
  const container = useRef(null);
  const [centerCoords, setCenterCoords] = useState({ x:0, y: 0 });
  const [currentSelected, setCurrentSelected] = useState(0);
  const circumference = 2 * Math.PI * props.radius

  useLayoutEffect(() => {
    if (container.current) {
      setCenterCoords({
        x: container.current.clientWidth / 2,
        y: container.current.clientHeight / 2
      });
    }
  }, []);

  function degreesToRadians(degrees: number) {
    return degrees * (Math.PI/180);
  }

  function getFramePositions(numElements: number): Array<[number, number]> {
    //all coords within this function assume center of view is 0,0 and up is +y, right is +x
    //we can convert them later
    const positions: Array<[number, number]> = []
    const arcLengthBetweenElements = circumference / numElements
    const angleBetweenElementsInRadians = arcLengthBetweenElements / props.radius
    //offset by 90 degrees because otherwise first item will be drawn to the right instead of to the top
    const offsetRadians = degreesToRadians(90) + angleBetweenElementsInRadians*currentSelected;
    for (let i = 0; i <= numElements; i++) {
      const x = props.radius * Math.cos(angleBetweenElementsInRadians*i+offsetRadians)
      const y = props.radius * Math.sin(angleBetweenElementsInRadians*i+offsetRadians)
      positions.push([x, y])
    }
    return positions
  }
  
  const framePositions = getFramePositions(props.children.length)

  function handleKeyPress() {
    setCurrentSelected(currentSelected+1)
  }

  return (
    <div css={Style.container} ref={container} onClick={()=>{handleKeyPress()}}>
      {
        props.children?.map((child: any, index: number) =>
          <Chamber
            key={index}
            idx={index}
            x={centerCoords.x + framePositions[index][0]} //translate by centerCoords.x
            y={centerCoords.y + (framePositions[index][1] * -1)} // translate by centerCoords.y, invert axis
          >
            {child}
          </Chamber>
        )
      }
    </div>
  )
}