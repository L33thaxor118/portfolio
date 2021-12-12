import React, { useState } from 'react'
import styles from './styles.css'
import profileImage from '../../assets/alien.jpeg'
import { Link } from 'react-router-dom'

export default function Sidebar(props) {
  return (
    <div className={styles.sidebar}>
      <img className={styles.profileImg} src={profileImage}/>
      <Link className={styles.listItemText} to="/">whoami</Link>
      <Link className={styles.listItemText} to="/projects">projects</Link>
    </div>
  )
}