/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import { css } from '@emotion/react'
import React, {useState, ReactElement, ReactNode, useEffect, useRef} from 'react'

interface PropTypes {
  children?: ReactNode
}

export default function Cylinder(props: PropTypes) {

  const [items, setItems] = useState([1,2,3,4,5,6,7,8,9,10,11,12])

  const focusRef = useRef(null)
  const [scrollPos, setScrollPos] = useState(0)
  const [focusBounds, setFocusBounds] = useState({start: 0, end: 0})

  const displayItems = items.map((item, idx)=>
    <Item 
      idx={idx} 
      focusBounds={focusBounds}
      isLast={idx === items.length-1} 
      key={item.toString()}/>
  )

  const handleScroll = (e: any) => {
    setScrollPos(e.target.scrollTop)
  }

  useEffect(()=>{
    if (focusBounds.start === 0) {
      const rect = focusRef.current?.getBoundingClientRect()
      setFocusBounds({start: rect?.top, end: rect?.bottom})
    }
  }, [scrollPos])

  console.log(focusBounds)

  return (
    <div css={Style.container}>
      <div css={Style.focus} ref={focusRef}>
      </div>
      <div css={Style.list} onScroll={handleScroll}>
        {displayItems}
      </div>
    </div>
  )
}

interface ItemPropTypes {
  idx: number,
  isLast: Boolean,
  focusBounds: {start: number, end: number} | undefined
}

function Item(props: ItemPropTypes) {
  const ref = useRef(null)
  const bounds = ref.current?.getBoundingClientRect()
  const start = bounds?.top
  const end = bounds?.bottom
  const left = bounds?.bottom
  const top = bounds?.top

  if (props.idx === 2) {
    console.log("item top: " + bounds?.top + "- item bottom: " + bounds?.bottom)
  }
  function isFocused(): boolean {
    if (start >= props.focusBounds?.start && end <= props.focusBounds?.end) {
      return true
    }
    return false
  }
  return (
    <div ref={ref} css={Style.preview(props.idx===0, props.isLast, isFocused())}>
    </div>
  )
}