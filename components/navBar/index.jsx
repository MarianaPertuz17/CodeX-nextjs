import logo from '../../public/assets/images/logo.png';
import styles from './styles.module.css';
import Link from 'next/link'
import Image from 'next/image';
import { useUser} from '@auth0/nextjs-auth0';

export function NavBar () {

  const { user } = useUser();

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
        {!user &&
        <div className={styles.buttonContainer}>
          <div className={styles.button}>
            <Link href="/api/auth/login">Sign In</Link>
          </div>
          <div className={styles.button}>
            <Link href="/api/signup">Sign Up</Link>
          </div>
        </div>
        }
        {user &&
        <div className={styles.button}>
          <Link href="/api/auth/logout">Sign Out</Link>
        </div>
        }
      </div>
      
    </div>
    
  )
}