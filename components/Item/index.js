import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { motion } from 'framer-motion'

import IconButton from '@material-ui/core/IconButton'
// Import Icons
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap'
import LocalMallIcon from '@material-ui/icons/LocalMall'

const Item = ({ name, img, price, customId }) => {
  const variants = {
    visible: (i) => ({
      scale: 1,
      transition: {
        duration: 1,
        delay: i * 0.3,
      },
    }),
    hidden: { scale: 0 },
    whileTap: { width: '40vw', height: '60vh' },
  }
  return (
    <motion.div
      className={styles.item}
      variants={variants}
      initial="hidden"
      custom={customId}
      animate="visible"
      whileTap="whileTap"
    >
      <motion.div className={styles.item__options}>
        <IconButton>
          <ZoomOutMapIcon size="inherit" />
        </IconButton>
        <IconButton>
          <LocalMallIcon size="inherit" />
        </IconButton>
      </motion.div>
      <div className={styles.item__imageHolder}>
        <img
          className={styles.item__image}
          src={img}
          alt={name}
          draggable="false"
        />
      </div>

      <div className={styles.item__description}>
        <h1 className={styles.description__name}>{name}</h1>
        <h3 className={styles.description__price}>{price}</h3>
      </div>
    </motion.div>
  )
}

export default Item
