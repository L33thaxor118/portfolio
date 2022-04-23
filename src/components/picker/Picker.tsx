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

  const displayItems = items.map((item, idx)=>
    <div css={Style.preview(idx===0, idx===items.length-1)} key={item.toString()}></div>
  )

  return (
    <div css={Style.container}>
      <div css={Style.focus}>
      </div>
      <div css={Style.list}>
        {displayItems}
      </div>
    </div>
  )
}