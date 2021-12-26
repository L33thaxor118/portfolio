/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React, {useRef, useState, useLayoutEffect, ReactElement, ReactNode} from 'react'
import Chamber from './chamber'

interface PropTypes {
  radius: number
  onSelect?: (idx: number) => void
  children?: CylinderViewable[]
}
export interface CylinderViewable {
  preview: (selected: boolean)=>ReactNode
  info: ReactNode
}

export default function Cylinder(props: PropTypes) {
  const container = useRef(null);
  const [centerCoords, setCenterCoords] = useState({ x:0, y: 0 });
  const [selectedIdx, setSelectedIdx] = useState(0);
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
    const offsetRadians = degreesToRadians(90) - angleBetweenElementsInRadians*selectedIdx;
    for (let i = 0; i <= numElements; i++) {
      const x = props.radius * Math.cos(angleBetweenElementsInRadians*i+offsetRadians)
      const y = props.radius * Math.sin(angleBetweenElementsInRadians*i+offsetRadians)
      positions.push([x, y])
    }
    return positions
  }
  
  const framePositions = getFramePositions(props.children.length)

  function handleKeyPress() {
    setSelectedIdx((selectedIdx + 1) % props.children.length)
  }

  return (
    <div css={Style.container} ref={container} onClick={()=>{handleKeyPress()}}>
      {
        props.children?.map((child: CylinderViewable, index: number) =>
          <Chamber
            key={index}
            idx={index}
            x={centerCoords.x + framePositions[index][0]} //translate by centerCoords.x
            y={centerCoords.y + (framePositions[index][1] * -1)} // translate by centerCoords.y, invert axis
          >
            {child.preview(index === selectedIdx)}
          </Chamber>
        )
      }
      <div style={{position: "absolute", left: centerCoords.x, top: centerCoords.y, borderStyle: 'solid'}}>
        {
          props.children[selectedIdx].info
        }
      </div>
    </div>
  )
}