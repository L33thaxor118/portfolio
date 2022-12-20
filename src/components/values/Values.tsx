/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Style from './styles'
import React, {ReactElement, useState} from 'react'
import {Text, TextStyle} from '../text'
import { BiUserVoice, BiBulb, BiMove, BiQuestionMark } from 'react-icons/bi'
import { BsBook } from 'react-icons/bs'

const IconIdMap: Record<string, ReactElement> = {
  "BiUserVoice": <BiUserVoice css={Style.valueItemIcon}/>,
  "BsBook": <BsBook css={Style.valueItemIcon}/>,
  "BiBulb": <BiBulb css={Style.valueItemIcon}/>,
  "BiMove": <BiMove css={Style.valueItemIcon}/>,
  "BiQuestionMark": <BiQuestionMark css={Style.valueItemIcon}/>
}

interface ValueItem {
  title: string,
  description: string,
  iconId: string
}

interface PropTypes {
  values: Array<ValueItem>
}

export default function Values(props: PropTypes) {
  return (
    <div css={Style.container}>
      <Text style={TextStyle.h1}>My Values</Text>
      <div css={Style.valuesContainer}>
      {
        props.values.map((data, idx)=>
          <ValueItem key={idx} data={data}/>
        )
      }
      </div>
    </div>
  )
}

interface ItemPropTypes {
  data: ValueItem
}

function ValueItem(props: ItemPropTypes) {
  return (
    <div css={Style.valueItemContainer}>
      {IconIdMap[props.data.iconId]}
      <div css={Style.valueTextContainer}>
        <Text style={TextStyle.h2}>{props.data.title}</Text>
        <Text style={TextStyle.body}>{props.data.description}</Text>
      </div>
    </div>
  )
}