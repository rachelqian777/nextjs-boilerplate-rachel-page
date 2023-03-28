import styles from '@/styles/Home.module.css'

export default function BottomSection(props) {
  return (
    <div className={styles.footer}>
      <p className={styles.onDarkBackground}>Learn more about Rachel's design at <a href="https://www.rachelqian.com/">www.rachelqian.com</a></p>
      <p className={styles.onDarkBackground}>Current page is {props.name}</p>
    </div>
  )
}


