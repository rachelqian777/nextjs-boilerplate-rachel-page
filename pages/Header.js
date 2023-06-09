import styles from '@/styles/Home.module.css'
import Link from "next/link"

export default function Header(props) {
  return (
    <div className={styles.head}>
      <div className={styles.header}>
        <h1>FUN THINGS ABOUT RACHEL</h1>
      </div>
      <div className={styles.topnav}>
        <Link className={styles.topnavitem} to="/" href="/">Home</Link>
        <Link className={styles.topnavitem} to="/Dancing" href="/Dancing">Dancing</Link>
        <Link className={styles.topnavitem} to="/Traveling" href="/Traveling">Traveling</Link>
      </div>
      <div className={styles.headline}>
        <p>{props.name}</p>
      </div>
    </div>
  )
}
 