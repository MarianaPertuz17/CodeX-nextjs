import styles from './styles.module.css';
import { NavBar } from '../../../components/navBar';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

export default function Success () {

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowWidth(window.width);
    setWindowHeight(window.height);
  }, [])

  return (
    <div className={styles.container}>
      <Confetti
        width={windowWidth}
        height={windowHeight}
      />
      <NavBar/>
      <div className={styles.successFlex}>
        <div className={styles.successText}>Thank you, your order has been placed!</div>
      </div>
    </div>
  )
}
