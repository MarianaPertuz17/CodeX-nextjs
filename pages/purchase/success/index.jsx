import styles from './styles.module.css';
import { NavBar } from '../../../components/navBar';
import Confetti from 'react-confetti'

export default function purchaseSuccess () {
  return (
    <div className={styles.container}>
      <Confetti/>
      <NavBar/>
      <div className={styles.successFlex}>
        <div className={styles.successText}>Thank you, your order has been placed!</div>
      </div>
    </div>
  )
}
