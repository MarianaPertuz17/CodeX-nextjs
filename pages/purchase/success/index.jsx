import styles from './styles.module.css';
import { NavBar } from '../../../components/navBar';

export default function purchaseSuccess () {
  return (
    <div className={styles.container}>
      <NavBar/>
      <div className={styles.successFlex}>
        <div className={styles.successText}>Thank you, your order has been placed!</div>
      </div>
    </div>
  )
}
