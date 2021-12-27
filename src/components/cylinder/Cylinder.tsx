/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React, {useRef, useState, useLayoutEffect, ReactElement, ReactNode, useEffect, WheelEvent, useCallback, useMemo, Children} from 'react'
import Chamber from './chamber'
import { radiansToDegrees, degreesToRadians, mod } from '../../utils/mathutils'

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
  const numChambers = props.children.length
  const circumference = 2 * Math.PI * props.radius

  const container = useRef(null)
  const [centerCoords, setCenterCoords] = useState({ x:0, y: 0 })

  const [chamberPositions] = useState<Array<[number, number]>>(getChamberPositions())
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [prevSelectedIdx, setPrevSelectedIdx] = useState(0)
  const [offsetDegrees, setOffsetDegrees] = useState(0)

  useLayoutEffect(() => {
    if (container.current) {
      setCenterCoords({
        x: container.current.clientWidth / 2,
        y: container.current.clientHeight / 2
      });
    }
  }, []);
  
  useEffect(()=>{
    setOffsetDegrees(prev => {
      let distanceClockwise = 0
      let distanceCounterClockwise = 0
      let newIdx = selectedIdx
      while (newIdx !== prevSelectedIdx) {
        distanceCounterClockwise++
        newIdx = mod((newIdx + 1),numChambers)
      }
      newIdx = selectedIdx
      while (newIdx !== prevSelectedIdx) {
        distanceClockwise++
        newIdx = mod((newIdx - 1), numChambers)
      }
      if (distanceClockwise <= distanceCounterClockwise) {
        return prev + distanceClockwise*getAngleBetweenChambers(true)
      } else {
        return prev - distanceCounterClockwise*getAngleBetweenChambers(true)
      }
    })
  }, [selectedIdx])

  function getAngleBetweenChambers(inDegrees: boolean): number {
    const arcLengthBetweenElements = circumference / numChambers
    const angleBetweenElementsInRadians = arcLengthBetweenElements / props.radius
    return inDegrees ? radiansToDegrees(angleBetweenElementsInRadians) : angleBetweenElementsInRadians
  }

  function getChamberPositions(): Array<[number, number]> {
    //all coords within this function assume center of view is 0,0 and up is +y, right is +x
    //we can convert them later
    const positions: Array<[number, number]> = []
    const angleBetweenElementsInRadians = getAngleBetweenChambers(false)
    //offset by 90 degrees because otherwise first item will be drawn to the right instead of at the top
    const offsetRadians = degreesToRadians(90);
    for (let i = 0; i <= numChambers; i++) {
      const x = props.radius * Math.cos(angleBetweenElementsInRadians*i+offsetRadians)
      const y = props.radius * Math.sin(angleBetweenElementsInRadians*i+offsetRadians)
      positions.push([x, y])
    }
    return positions
  }
  
  const handleSelectedIdx = (idx: number) => {
    setSelectedIdx(prev => {
      setPrevSelectedIdx(prev)
      return idx
    })
  }

  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "100%"
    }}>
      <div style={{
        position: "relative",
        width: "100%",
        height: "100%",
        transform: `rotate(${offsetDegrees}deg)`,
        transitionProperty: 'transform',
        transitionDuration: '1s',
        transformOrigin: `center`,
      }} ref={container}>
        {
          props.children?.map((child: CylinderViewable, index: number) =>
            <Chamber
              key={index}
              idx={selectedIdx}
              rotationDegrees={offsetDegrees}
              selected={index === selectedIdx}
              x={centerCoords.x + chamberPositions[index][0]} //translate by centerCoords.x
              y={centerCoords.y + (chamberPositions[index][1] * -1)} // translate by centerCoords.y, invert axis
            >
              <div onClick={()=>{handleSelectedIdx(index)}}>
                {child.preview(index === selectedIdx)}
              </div>
            </Chamber>
          )
        }
      </div>
      <div style={{
          width: '250px',
          height: '250px',
          margin: 'auto',
          position: "absolute", 
          left: `${centerCoords.x - 125}px`, 
          top: `${centerCoords.y - 125}px`, 
          borderStyle: "solid",}}>
        {
          props.children[selectedIdx].info
        }
      </div>
    </div>
  )
}