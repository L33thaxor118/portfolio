/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import { css } from '@emotion/react'
import React, {useState, ReactElement, ReactNode, useEffect, useRef, useLayoutEffect} from 'react'
import { useNavigate } from 'react-router-dom'

interface PropTypes {
  projects: Array<PickerViewable>
}

export interface PickerViewable {
  title: string,
  topics: Array<string>,
  description: string,
  imgSrc: string
}

export default function Picker(props: PropTypes) {
  const {projects} = props

  const focusRef = useRef(null)
  const [scrollPos, setScrollPos] = useState(0)
  const [focusBounds, setFocusBounds] = useState({start: 0, end: 0})
  const [focusedIdx, setFocusedIdx] = useState(0)
  const [showTitle, setShowTitle] = useState(true)

  function handleFocusChange(newType: FocusType, idx: number) {
    if (newType === FocusType.Full) {
      setFocusedIdx(idx)
    }
    if (newType === FocusType.Partial) {
      if (idx != focusedIdx) {
        setShowTitle(false)
      }
    }
    if (newType === FocusType.None) {
      if (idx != focusedIdx) {
        setShowTitle(true)
      }
    }
  }

  const displayItems = projects.map((project, idx)=>
    <Item 
      idx={idx} 
      onFocusChange={handleFocusChange}
      focusBounds={focusBounds}
      isLast={idx === projects.length-1}
      title={project.title}
      imgUrl={project.imgSrc} 
      key={project.title}/>
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
  //M 25 300 L 25 300 A 281 500, 0, 0 0, 300 300,

  return (
    <div css={Style.container}>
      <div css={Style.focus(scrollPos*1.5 + 140)} ref={focusRef}>
        <svg viewBox="0 -10 500 500" css={css`margin-top:-100%;`}>
          <path fill="transparent" id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
          <text css={Style.projectTitle} width="500">
            <textPath startOffset="50%" href="#curve">
              {showTitle ? projects[focusedIdx].title : ""}
            </textPath>
          </text>
          <path fill="transparent" id="bottomcurve" transform="translate(12 20)" d="M 25 300 L 25 300 A 310 460, 0, 0 0, 450 300,"></path>
          <text css={Style.projectTitle} width="600">
            <textPath startOffset="50%" href="#bottomcurve">
              {showTitle ? projects[focusedIdx].topics.reduce((prev, curr)=>prev + " - " + curr) : ""}
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

enum FocusType { Full="full", Partial="partial", None="none" }

interface ItemPropTypes {
  imgUrl: string,
  title: String,
  idx: number,
  isLast: Boolean,
  focusBounds: {start: number, end: number} | undefined
  onFocusChange: (newType: FocusType, idx: number)=>void
}

function Item(props: ItemPropTypes) {
  const ref = useRef(null)
  const navigate = useNavigate()
  const bounds = ref.current?.getBoundingClientRect()
  const start = bounds?.top
  const end = bounds?.bottom
  const [latestFocus, setLatestFocus] = useState(FocusType.None)

  var focusType = FocusType.None
  if (start < props.focusBounds?.start && end > props.focusBounds?.start) {
    focusType = FocusType.Partial
  } else if (start < props.focusBounds?.end && end > props.focusBounds?.end) {
    focusType = FocusType.Partial
  } else if (start >= props.focusBounds?.start && end <= props.focusBounds?.end) {
    focusType = FocusType.Full
  }

  if (focusType !== latestFocus) {
    setLatestFocus(focusType)
  }

  useLayoutEffect(()=>{
    props.onFocusChange(latestFocus, props.idx)
  }, [latestFocus])

  return (
    <div 
      ref={ref} 
      css={Style.preview(props.idx===0, props.isLast, focusType===FocusType.Full)}
      onClick={()=>{navigate(`/projects/${props.title.toLowerCase()}`)}}>
      <img css={css`
        margin-top: -100%;
        @media (max-width: 485px) {
          width: 100px;
          height: 100px;
        }
        width: 200px;
        height: 200px;
      `} 
      src={props.imgUrl} />
    </div>
  )
}