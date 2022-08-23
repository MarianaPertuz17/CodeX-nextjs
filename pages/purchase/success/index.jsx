import styles from './styles.module.css';
import { NavBar } from '../../../components/navBar';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export default function purchaseSuccess () {
  const { width, height } = useWindowSize();
  return (
    <div className={styles.container}>
      <Confetti
        width={width}
        height={height}
      />
      <NavBar/>
      <div className={styles.successFlex}>
        <div className={styles.successText}>Thank you, your order has been placed!</div>
      </div>
    </div>
  )
}
