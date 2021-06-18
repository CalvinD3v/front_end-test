import { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'moment';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import MessageIcon from '../components/MessageIcon'
import ProfileIcon from '../components/ProfileIcon'
import CalenderIcon from '../components/CalenderIcon'
import MapIcon from '../components/MapIcon'
import PhoneIcon from '../components/PhoneIcon'
import LockIcon from '../components/LockIcon'

export default function Home() {
  const [icon, setIcons] = useState({ margin: 15 })
  const [active, setActive] = useState('Name')
  const [data, setData] = useState(
    {
      name: {title: '',first: '',last: ''},
      email: '',
      dob: {date: ''},
      phone: '',
      location: {street: {number: null,name: ''},city: '',},
      login: {password: '',},
      picture: {large: '',medium: '',thumbnail: '',
      }
    }
  )
  const [detail, setDetail] = useState('')

  const setValues = (act: string, value: string) => {
    setActive(act)
    setDetail(value)
  }

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/')
      .then(function ({ data }) {
        setData(data.results[0])
        setDetail(`${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`)
      })
  }, [])

  return (
    <div className={styles.container}>

      <Head>
        <title>Front-End | Test</title>
        <meta name='description' content='Front-end test' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={`${styles.frame}, ${styles.card_offset}`}>
        <div className={styles.card}>

          <div className={styles.details}>
            <div className={styles.user_photo}>
              <img src={data.picture.medium} />
            </div>
            <p className={styles.user_title}>Hi, My {active} is</p>
            <p className={styles.user_value}>{detail}</p>
          </div>

          <div className={styles.icons}>
            <span onMouseOver={() => setValues('Name', `${data.name.title} ${data.name.first} ${data.name.last}`)}><ProfileIcon style={icon} active={active} /></span>
            <span onMouseOver={() => setValues('Email Address', data.email)}><MessageIcon style={icon} active={active} /></span>
            <span onMouseOver={() => setValues('Birthday',  Moment(data.dob.date).format('d MMMM YYYY'))}><CalenderIcon style={icon} active={active} /></span>
            <span onMouseOver={() => setValues('Physical Address', `${data.location.street.number} ${data.location.street.name} ${data.location.city}`)}><MapIcon style={icon} active={active} /></span>
            <span onMouseOver={() => setValues('Phone Number', data.phone)}><PhoneIcon style={icon} active={active} /></span>
            <span onMouseOver={() => setValues('Password', data.login.password)}><LockIcon style={icon} active={active} /></span>
          </div>

        </div>
      </main>

    </div>
  )
}
