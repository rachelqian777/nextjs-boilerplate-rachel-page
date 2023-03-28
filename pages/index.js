import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from './Header.js'
import BottomSection from './Footer.js'
import Link from "next/link"


const inter = Inter({ subsets: ['latin'] })




export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       
        <Header 
          name="Home Page"
        />


        <div className={styles.intro}>
          <h2>A Little About Me</h2>
          <p>Hi, my name is Rachel Qian. I am currently a product designer based in Los Angeles, CA. Scroll down to learn more about my hobbies and interests!</p>
        </div>

        <div className={styles.row}>
          <div className={styles.column}>
            <img src="dancing01.jpg" alt ="Dancing"></img>
          </div>
          <div className={styles.column}>
            <h2 className={styles.onDarkBackground}>Dancing</h2>
            <br></br>
            <p className={styles.onDarkBackground}>Dancing has always been my favorite thing to do outside of school and work. I have tried Jazzfunk, Hiphop and Chreography. My next step is to get more into old school styles like Popping and Locking. Living in LA also gives me one of the best resources in the world in terms of dancing. So thank you LA!</p>
            <br></br>
            <Link className={styles.button} to="/Dancing" href="/Dancing">Learn More</Link>
          </div>
        </div>
        
        <div className={styles.row}>
          <div className={styles.column}>
            <img src="travel01.jpg" alt="Dancing"></img>
          </div>
          <div className={styles.column}>
            <h2 className={styles.onDarkBackground}>Traveling</h2>
            <br></br>
            <p className={styles.onDarkBackground}>Although not a fan of flying long distances, I love traveling to different countries and cities. I grew up in China and have been to more than 20 cities in China. I have also traveled to Australia, Japan, Korea and Singapore. My goal for the coming years is to explore europe and South America countries more!</p>
            <br></br>
            <Link className={styles.button} to="/Traveling" href="/Traveling">Learn More</Link>
          </div>
        </div>

      <BottomSection 
        name="Home Page"
      />


      </main>
    </>
  )
}
