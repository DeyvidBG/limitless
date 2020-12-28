import react, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Shop/Shop.module.css'
import Navbar from '../components/Navbar'
import Modal from '../components/Modal'
import Item from '../components/Item'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

// Import Material UI
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default function Home() {
  const classes = useStyles()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [sorting, setSorting] = useState(0)
  const [items, setItems] = useState([
    {
      name: 'Shoe',
      img:
        'https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png',
      price: '123.12',
    },
    {
      name: 'Shoe',
      img:
        'https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png',
      price: '123.12',
    },
    {
      name: 'Shoe',
      img:
        'https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png',
      price: '123.12',
    },
    {
      name: 'Shoe',
      img:
        'https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png',
      price: '123.12',
    },
  ])

  const handleChange = (event) => {
    const age = event.target.age
    setSorting(age)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className={styles.badge}></div>
      <div className={styles.shop}>
        <div className={styles.shop__options}>
          <h1>Shop</h1>
          <div className={styles.shop__sorting}>
            <h3>Showing 12 results of 36</h3>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
              <Select
                native
                value={sorting}
                onChange={handleChange}
                label="Age"
                inputProps={{
                  name: 'age',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={styles.shop__listing}>
          {items.map((item, i) => {
            return (
              <Item
                img={item.img}
                name={item.name}
                price={item.price}
                customId={i}
                key={i}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
