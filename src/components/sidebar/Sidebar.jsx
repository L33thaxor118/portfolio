import React from 'react'
import styles from './styles.css'
import profileImage from '../../assets/alien.jpeg'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img className={styles.profileImg} src={profileImage}/>
      <h3 className={styles.listItemText}>whoami</h3>
      <h3 className={styles.listItemText}>projects</h3>
      <h3 className={styles.listItemText}>symlinks</h3>
      <h3 className={styles.listItemText}>contact</h3>
    </div>
  )
}