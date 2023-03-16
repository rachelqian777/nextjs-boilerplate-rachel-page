import styles from '@/styles/Home.module.css'

function BottomSection() {
  return (
    <div className={styles.footer}>
      <p>Learn more about Rachel's design at <a href="https://www.rachelqian.com/">www.rachelqian.com</a></p>
    </div>
  )
}

export default function Footer() {
  return (
    <BottomSection />
  );
}