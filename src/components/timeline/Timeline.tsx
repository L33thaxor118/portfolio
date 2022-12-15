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
  const [focusIdx, setFocusIdx] = useState<number>(null)
  const {scrollPosition, isScrollingDown} = useScrollPosition()
  const [offsets, setOffsets] = useState<Array<number>>([-1,-1,-1])

  useEffect(()=>{
    const observerOptions = {
      rootMargin: '-30%',
      threshold: 0.5
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

  useEffect(()=>{
    const prevIdx = focusIdx
    const newIdx = focusState.lastIndexOf(true)
    if (newIdx === -1) {
      if (isScrollingDown) {
        setFocusIdx(prevIdx)
      } else {
        setFocusIdx(prevIdx-1)
      }
    } else {
      setFocusIdx(newIdx)
    }
  }, [focusState])

  useEffect(()=>{
    if (offsets[focusIdx] === -1) {  
      offsets[focusIdx] = scrollPosition
    }
  }, [focusIdx])

  return (
    <div css={Style.container}>
      <div css={Style.sectionContainer}>
        <EventContent title='' content=''/>
        <div css={Style.lineContainer}>
          <Point ref={pointRefs[0]} isSelected={0 == focusIdx}/>
          <Spacer y={10}/>
          <Line finished={focusState[1]} selected={0 == focusIdx } height={scrollPosition - offsets[0]}/>
          <Spacer y={10}/>
        </div>
        <EventContent isFocused={focusIdx == 0} title='Im a Title!' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'/>
      </div>
      <div css={Style.container}>
        <div css={Style.sectionContainer}>
          <EventContent isLeft isFocused={focusIdx == 1} title='Im a Title!' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation.'/>
          <div css={Style.lineContainer}>
            <Point ref={pointRefs[1]} isSelected={1 == focusIdx}/>
            <Spacer y={10}/>
            <Line finished={focusState[2]} selected={1 == focusIdx } height={scrollPosition - offsets[1]}/>
            <Spacer y={10}/>
          </div>
          <EventContent title='' content=''/>
        </div>
      </div>
      <div css={Style.container}>
        <div css={Style.sectionContainer}>
        <EventContent title='' content=''/>
          <div css={Style.lineContainer}>
            <Point ref={pointRefs[2]} isSelected={2 == focusIdx}/>
            <Spacer y={10}/>
            <Line finished={focusState[3]} selected={2 == focusIdx } height={scrollPosition - offsets[2]}/>
            <Spacer y={10}/>
          </div>
          <EventContent isFocused={focusIdx == 2} title='Im a Title!' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'/>
        </div>
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
  finished: boolean,
  selected: boolean,
  height: number
}
function Line(props: LinePropTypes) {
  return (
    <div css={Style.line}>
      <div css={Style.progressline(props.finished, props.selected, props.height)}/>
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