import React from 'react'
import Image from 'next/image'
import styles from '../styles/Signup/Signup.module.css'

// Import styles
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))

export default function Signup() {
  const classes = useStyles()
  return (
    <div className={styles.container}>
      <div className={styles.signup__info}>
        <h2 className={`${styles.title} ${styles.text}`}>Limitless</h2>
        <h3 className={styles.text}>
          Join our
          <span className={styles.title}> limitless </span>
          world now and enjoy many free articles and discounts in our shop
          <span className={styles.title}>!</span>
        </h3>
        <p className={styles.text}>
          Privileges
          <br />
          <ul>
            <li className={styles.advantage}>faster checkouts</li>
            <li className={styles.advantage}>more discounts</li>
            <li className={styles.advantage}>affiliate program</li>
          </ul>
        </p>
      </div>
      <div className={styles.signup__form}>
        <Image
          src="/shopping.png"
          alt="Shopping"
          width="200"
          height="150"
          draggable="false"
          style={{ margin: '10px' }}
        />
        <h1 style={{ margin: '10px' }}>Create an account</h1>
        <form
          className={`${classes.root} ${styles.form}`}
          noValidate
          autoComplete="off"
          style={{ margin: '10px' }}
        >
          <TextField label="Name" className={styles.input} variant="filled" />
          <TextField label="Email" className={styles.input} variant="filled" />
          <TextField
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            className={styles.input}
            variant="filled"
          />
          <TextField
            type="password"
            label="Password"
            className={styles.input}
            variant="filled"
          />
          <button type="submit" className={styles.submit}>
            Create an account
          </button>
        </form>
      </div>
    </div>
  )
}
