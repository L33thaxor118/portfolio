/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React, {useState, ReactElement, ReactNode, useEffect, useRef, useLayoutEffect, forwardRef, ForwardedRef} from 'react'
import Spacer from '../spacer'
import useScrollPosition from '../../hooks/useScrollPosition'
import { useMediaQuery } from 'react-responsive'

interface TimelineEvent {
  title: string,
  description: string,
  imageUrl?: string
}

interface PropTypes {
  events: Array<TimelineEvent>
}

export default function Timeline(props: PropTypes) {
  const pointRefs = props.events.map(()=>useRef(null))
  const [focusState, setFocusState] = useState<Array<boolean>>(pointRefs.map(()=>false))
  const [focusIdx, setFocusIdx] = useState<number>(null)
  const {scrollPosition, isScrollingDown} = useScrollPosition()
  const [scrollOffset, setScrollOffset] = useState(0)
  const isSmallScreen = useMediaQuery({ query: '(max-width: 800px)' })

  useEffect(()=>{
    const observerOptions = {
      rootMargin: '-30% 0%',
      threshold: 0
    }
    const observer = new IntersectionObserver((entries) => {
      if (scrollOffset === 0) {
        setScrollOffset(entries[0].rootBounds.bottom)
      }
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

  const scroll = scrollOffset + scrollPosition

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

  return (
    <div css={Style.container}>
      {
        props.events.map((event, idx) => {
          const showOnLeftSide = isSmallScreen ? false : idx % 2 === 0
          return <div key={idx} css={Style.sectionContainer}>
            {
              showOnLeftSide ? <EventContent isLeft event={event} isFocused={focusIdx === idx}/> : !isSmallScreen && <EventSpacer/>
            }
            <div css={Style.lineContainer}>
              <Point ref={pointRefs[idx]} isSelected={idx == focusIdx}/>
              <Spacer y={12}/>
              <Line finished={focusIdx > idx} selected={idx == focusIdx } progress={scroll - pointRefs[idx].current?.offsetTop}/>
            </div>
            {
              showOnLeftSide ? <EventSpacer/> : <EventContent event={event} isFocused={focusIdx === idx}/>
            }
          </div>
        }
        )
      }
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
  progress: number
}
function Line(props: LinePropTypes) {
  return (
    <div css={Style.line}>
      <div css={Style.progressline(props.finished, props.selected, props.progress)}/>
    </div>
  )
}

interface EventContentPropTypes {
  event: TimelineEvent
  isFocused?: boolean
  isLeft?: boolean
}
function EventContent(props: EventContentPropTypes) {
  return (
    <div css={Style.eventContentContainer(props.isFocused, props.isLeft)}>
      <h2>{props.event.title}</h2>
      <p>{props.event.description}</p>
      <img css={Style.eventImage} src={props.event.imageUrl}/>
    </div>
  )
}

function EventSpacer() {
  return (
    <div css={Style.eventSpacer}/>
  )
}