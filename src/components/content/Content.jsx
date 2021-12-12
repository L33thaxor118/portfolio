import React from 'react'
import Projects from './projects'
import styles from './styles.css'
import WhoAmI from './whoami'
import { Routes, Route } from 'react-router-dom';

export default function Content(props) {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path="/" element={<WhoAmI/>}/>
        <Route path="projects" element={<Projects/>} />
      </Routes>
    </div>
  )
}