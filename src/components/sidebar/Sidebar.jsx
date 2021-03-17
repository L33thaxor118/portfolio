import React from 'react'
import styles from './styles.css'
import profileImage from '../../assets/alien.jpeg'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h1>hi im a sidebar</h1>
      <img className={styles.profileImg} src={profileImage}/>
    </div>
  )
}