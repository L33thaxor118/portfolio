/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'

interface PropTypes {
  project: any,
}

export default function ProjectDetail(props: PropTypes) {
  return (
    <div>{props.project?.title}</div>
  )
}