import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Dancing() {
  return (
    <>
      <Head>
        <title>Dancing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       
        <div className={styles.head}>
          <div className={styles.header}>
            <h1>FUN THINGS ABOUT RACHEL</h1>
          </div>
          <div className={styles.topnav}>
            <a href="#" className={styles.topnavitem} >Home</a>
            <a href="#" className={styles.topnavitem} >Dancing</a>
            <a href="#" className={styles.topnavitem} >Traveling</a>
          </div>
        </div>

        <div className={styles.module}>
          <h2>Why I love dancing</h2>
          <p>Dancing has always been my favorite thing to do outside of school and work. I have tried Jazzfunk, Hiphop and Chreography. My next step is to get more into old school styles like Popping and Locking. Dancing is a great way to meet new friends, to release stress, and to keep fit</p>
          <div className={styles.photogallery}>
            <img src="dancetile01.jpg" className={styles.photo}></img>
            <img src="dancetile02.jpg" className={styles.photo}></img>
            <img src="dancetile03.jpg" className={styles.photo}></img>
            <img src="dancetile04.jpg" className={styles.photo}></img>
          </div>
        </div>

        <div className={styles.footer}>
          <p>Learn more about Rachel's design at <a href="https://www.rachelqian.com/">www.rachelqian.com</a></p>
        </div>

      </main>
    </>
  )
}