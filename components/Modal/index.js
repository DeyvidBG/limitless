import React from 'react'
import styles from './index.module.css'

const Modal = (children) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>{children}</div>
    </div>
  )
}

export default Modal
