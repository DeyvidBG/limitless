import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { motion } from 'framer-motion'

import IconButton from '@material-ui/core/IconButton'
// Import Icons
import PersonIcon from '@material-ui/icons/Person'

const Navbar = ({ isLoggedIn }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__sections}>
        <h2 className={styles.title}>limitless</h2>
      </div>
      <div className={styles.navbar__sections}>
        <button className={styles.button}>Home</button>
        <button className={styles.button}>Shop</button>
        <button className={styles.button}>Blog</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.navbar__sections}>
        {isLoggedIn ? (
          <React.Fragment>
            <h5 className={styles.account__name}>Hi, Deyvid</h5>
            <IconButton>
              <PersonIcon htmlColor="#ff7675" fontSize="inherit" />
            </IconButton>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button className={styles.button}>Sign In</button>
            <button className={styles.button}>Sign Up</button>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default Navbar
