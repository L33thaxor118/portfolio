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

  //Positions for each chamber in coordinates relative to center of circle
  const [chamberPositions] = useState<Array<[number, number]>>(getChamberPositions())

  const [selectedIdx, setSelectedIdx] = useState(0)
  const [prevSelectedIdx, setPrevSelectedIdx] = useState(0)

  //Degrees away from initial position of circle (can be + or -)
  const [offsetDegrees, setOffsetDegrees] = useState(0)

  const [expanded, setExpanded] = useState(false)

  useLayoutEffect(() => {
    if (container.current) {
      setCenterCoords({
        x: container.current.clientWidth / 2,
        y: container.current.clientHeight / 2
      });
    }
  }, []);

  const handleSelectedIdx = (idx: number) => {
    setSelectedIdx(prev => {
      setPrevSelectedIdx(prev)
      return idx
    })
    if (props.onSelect) {
      props.onSelect(idx)
    }
  }
  
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
    //First assume center of view coordinates are [0,0], up is +y, right is +x
    const positions: Array<[number, number]> = []
    const angleBetweenElementsInRadians = getAngleBetweenChambers(false)
    //Offset by 90 degrees because otherwise first item will be drawn to the right instead of at the top
    const offsetRadians = degreesToRadians(90);
    for (let i = 0; i <= numChambers; i++) {
      const x = props.radius * Math.cos(angleBetweenElementsInRadians*i+offsetRadians)
      const y = props.radius * Math.sin(angleBetweenElementsInRadians*i+offsetRadians)
      //We will convert these to absolute coords during render (invert Y axis and translate)
      positions.push([x, y])
    }
    return positions
  }

  return (
    <div css={Style.container}>
      <div css={Style.cylinderContainer(offsetDegrees)} ref={container}>
        {
          props.children?.map((child: CylinderViewable, index: number) =>
            <Chamber
              key={index}
              idx={selectedIdx}
              rotationDegrees={offsetDegrees}
              selected={index === selectedIdx}
              x={centerCoords.x + chamberPositions[index][0]}
              y={centerCoords.y + (-1*chamberPositions[index][1])}>
              <div onClick={()=>{handleSelectedIdx(index)}}>
                {child.preview(index === selectedIdx)}
              </div>
            </Chamber>
          )
        }
      </div>
      <div css={Style.selectedFrame(expanded)}>
        {
          props.children[selectedIdx].info
        }
      </div>
    </div>
  )
}