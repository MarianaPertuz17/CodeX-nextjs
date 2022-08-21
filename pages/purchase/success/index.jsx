import styles from './styles.module.css';
import { NavBar } from '../../../components/navBar';

export default function purchaseSuccess () {
  return (
    <div className={styles.container}>
      <NavBar/>
      <div className={styles.successText}>Thank you for your payment!</div>
    </div>
  )
}
