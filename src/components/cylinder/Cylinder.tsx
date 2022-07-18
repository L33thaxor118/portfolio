/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import { css } from '@emotion/react'
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

interface Selection {
  prev: number
  curr: number
}

export default function Cylinder(props: PropTypes) {
  const numChambers = props.children.length
  const circumference = 2 * Math.PI * props.radius
  const container = useRef(null)

  const [centerCoords, setCenterCoords] = useState({ x:0, y: 0 })

  //Positions for each chamber in coordinates relative to center of circle
  const [chamberPositions] = useState<Array<[number, number]>>(getChamberPositions())

  const [selection, setSelection] = useState<Selection>({prev: 0, curr: 0})

  //Degrees away from initial position of circle (can be + or -)
  const [offsetDegrees, setOffsetDegrees] = useState(0)

  const handleSelectedIdx = (idx: number) => {
    setSelection(prev => {
      return {prev: prev.curr, curr: idx}
    })
    if (props.onSelect) {
      props.onSelect(idx)
    }
  }

  function getCenterCoords(): {x: number, y: number} {
    return {
      x: container.current.clientWidth / 2,
      y: container.current.clientHeight / 2
    }
  }
  
  const resizeListener = ()=>setCenterCoords(getCenterCoords())

  useLayoutEffect(() => {
    if (container.current) {
      setCenterCoords(getCenterCoords())
      window.addEventListener('resize', resizeListener)
    }
    return ()=>window.removeEventListener('resize', resizeListener)
  }, []);
  
  useEffect(()=>{
    setOffsetDegrees(prev => {
      let distanceClockwise = 0
      let distanceCounterClockwise = 0
      let newIdx = selection.curr
      while (newIdx !== selection.prev) {
        distanceCounterClockwise++
        newIdx = mod((newIdx + 1),numChambers)
      }
      newIdx = selection.curr
      while (newIdx !== selection.prev) {
        distanceClockwise++
        newIdx = mod((newIdx - 1), numChambers)
      }
      if (distanceClockwise <= distanceCounterClockwise) {
        return prev + distanceClockwise*getAngleBetweenChambers(true)
      } else {
        return prev - distanceCounterClockwise*getAngleBetweenChambers(true)
      }
    })
  }, [selection])

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
      <div css={css`overflow:hidden;`}>
        <div css={Style.cylinderContainer(offsetDegrees)} ref={container}>
          {
            props.children?.map((child: CylinderViewable, index: number) =>
              <Chamber
                key={index}
                idx={selection.curr}
                rotationDegrees={offsetDegrees}
                selected={index === selection.curr}
                x={centerCoords.x + chamberPositions[index][0]}
                y={centerCoords.y + (-1*chamberPositions[index][1])}>
                <div onClick={()=>{handleSelectedIdx(index)}}>
                  {child.preview(index === selection.curr)}
                </div>
              </Chamber>
            )
          }
        </div>
      </div>
      <div css={Style.selectedFrame(false)}>
        {
          props.children[selection.curr].info
        }
      </div>
    </div>
  )
}