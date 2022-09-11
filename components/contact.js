import styles from 'styles/contact.module.scss'
import Social from './social'

export default function Contact() {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>

      <address>cube@web.mail.address</address>
      <Social iconSize="30px" />
    </div>
  )
}
