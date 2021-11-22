import React, { useState } from 'react'
import styles from './styles.css'
import profileImage from '../../assets/alien.jpeg'

export default function Sidebar(props) {
  return (
    <div className={styles.sidebar}>
      <img className={styles.profileImg} src={profileImage}/>
      <h3 className={styles.listItemText} onClick={()=>{props.navigate("whoami")}}>whoami</h3>
      <h3 className={styles.listItemText} onClick={()=>{props.navigate("projects")}}>projects</h3>
    </div>
  )
}