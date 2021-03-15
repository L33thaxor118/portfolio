import React from 'react'
import styles from './app.css'
import Content from './components/content'
import Sidebar from './components/sidebar'

export default function App() {
  return (
    <div className={styles.app}>
      <Sidebar/>
      <Content/>
    </div>
  )
}