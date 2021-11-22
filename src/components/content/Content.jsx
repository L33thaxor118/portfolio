import React from 'react'
import Projects from './projects'
import styles from './styles.css'
import WhoAmI from './whoami'

export default function Content(props) {
  return (
    <div className={styles.content}>
      {props.currentView == "whoami" && <WhoAmI/>}
      {props.currentView == "projects" && <Projects/>}
    </div>
  )
}