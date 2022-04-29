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

  return (
    <div css={Style.container}>
      <div css={Style.focus(scrollPos*1.5 + 140)} ref={focusRef}>
        <svg viewBox="0 0 500 500" css={css`margin-top:-100%;`}>
          <path fill="transparent" id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
          <text css={Style.projectTitle} width="500">
            <textPath startOffset="50%" href="#curve">
              Dangerous
            </textPath>
          </text>
        </svg>
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