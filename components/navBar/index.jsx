import logo from '../../public/assets/images/logo.png';
import styles from './styles.module.css';
import Link from 'next/link'
import Image from 'next/image';

export function NavBar () {
  return(
    <div className={styles.container}>
      <Image
          src={logo}
          alt="logo"
          height='100%'
          width='200px'
        />
      <div >
        <Link href="/sandbox" className={styles.questionsLabel}>Sandbox</Link>
      </div>
      
      <div className={styles.labelContainer}>
        <div className={styles.questionsLabel}>
          <Link href="/questions">Coding Interview Questions</Link>
        </div>
        
        <div className={styles.buttonContainer}>
          <div className={styles.button}>
            <Link href="/signin">Sign In</Link>
          </div>
          <div className={styles.button}>
            <Link href="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
      
    </div>
    
  )
}