import React, { useState } from 'react'
import styles from './app.css'
import Content from './components/content'
import Sidebar from './components/sidebar'

export default function App() {
 const [currentContentView, setCurrentContentView] = useState("whoami")
  const navigate = (toContentView) => {
    setCurrentContentView(toContentView)
  }

  return (
    <div className={styles.app}>
      <Sidebar currentView={currentContentView} navigate={navigate}/>
      <Content currentView={currentContentView}/>
    </div>
  )
}