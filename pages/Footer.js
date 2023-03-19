import styles from '@/styles/Home.module.css'

export default function BottomSection(props) {
  return (
    <div className={styles.footer}>
      <p>Learn more about Rachel's design at <a href="https://www.rachelqian.com/">www.rachelqian.com</a></p>
      <p>Current page is {props.name}</p>
    </div>
  )
}


