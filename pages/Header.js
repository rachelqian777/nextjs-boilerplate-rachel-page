import styles from '@/styles/Home.module.css'

function Topsection() {
  return (
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
  )
}

export default function Header() {
  return (
    <Topsection />
  );
}