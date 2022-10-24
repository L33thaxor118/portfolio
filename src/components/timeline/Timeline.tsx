/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import { css } from '@emotion/react'
import React, {useState, ReactElement, ReactNode, useEffect, useRef, useLayoutEffect, forwardRef, ForwardedRef} from 'react'
import { TextStyle, Text } from '../text'
import Spacer from '../spacer'
import useScrollPosition from '../../hooks/useScrollPosition'

interface PropTypes {
}

export default function Timeline(props: PropTypes) {
  const pointRefs = [useRef(null), useRef(null), useRef(null)]
  const [focusState, setFocusState] = useState<Array<boolean>>(pointRefs.map(()=>false))

  useEffect(()=>{
    const observerOptions = {
      rootMargin: '-5%',
      threshold: 1.0
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, idx)=>{
        const changedItemIdx = pointRefs.findIndex((ref)=>ref.current==entry.target)
        setFocusState((prev) => {
          const newState = [...prev]
          newState[changedItemIdx] = entry.isIntersecting
          return newState
        })
      })
    }, observerOptions)
    pointRefs.forEach((ref)=>observer.observe(ref.current))
  }, [])

  const lastFocusIdx = focusState.lastIndexOf(true)

  return (
    <div css={Style.container}>
      <div css={Style.sectionContainer}>
        <EventContent title='' content=''/>
        <div css={Style.lineContainer}>
          <Point ref={pointRefs[0]} isSelected={0 == lastFocusIdx}/>
          <Spacer y={10}/>
          <Line finished={focusState[1]}/>
          <Spacer y={10}/>
        </div>
        <EventContent isFocused={lastFocusIdx == 0} title='Im a Title!' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'/>
      </div>
      <div css={Style.container}>
        <div css={Style.sectionContainer}>
          <EventContent isLeft isFocused={lastFocusIdx == 1} title='Im a Title!' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'/>
          <div css={Style.lineContainer}>
            <Point ref={pointRefs[1]} isSelected={1 == lastFocusIdx}/>
            <Spacer y={10}/>
            <Line finished={focusState[2]}/>
            <Spacer y={10}/>
          </div>
          <EventContent title='' content=''/>
        </div>
      </div>
      <div>
        <Point ref={pointRefs[2]} isSelected={2 == lastFocusIdx}/>
      </div>
    </div>
  )
}

interface PointPropTypes {
  isSelected: boolean
}
const Point = forwardRef((props: PointPropTypes, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} css={Style.point}>
      <div css={Style.innerPoint(props.isSelected)}/>
    </div>
  )
})

interface LinePropTypes {
  finished: boolean
}
function Line(props: LinePropTypes) {
  return (
    <div css={Style.line}>
      <div css={Style.progressline(props.finished)}/>
    </div>
  )
}

interface EventContentPropTypes {
  title: string
  content: string
  isFocused?: boolean
  isLeft?: boolean
}
function EventContent(props: EventContentPropTypes) {
  return (
    <div css={Style.eventContentContainer(props.isFocused, props.isLeft)}>
      <Text style={TextStyle.h2}>{props.title}</Text>
      <Text style={TextStyle.body}>{props.content}</Text>
    </div>
  )
}