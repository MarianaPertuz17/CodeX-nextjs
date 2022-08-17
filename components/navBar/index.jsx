import logo from '../../public/assets/images/logo.png';
import styles from './styles.module.css';
import Link from 'next/link'
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router'

export function NavBar () {

  const { user } = useUser();

  return(
    <div className={styles.container}>
      <Link href="/">
        <a style={{cursor:'pointer'}}>
          <Image
            src={logo}
            alt="logo"
            height='100%'
            width='200px'
          />
        </a>
      </Link>
      <div >
        <Link href="/sandbox" className={styles.questionsLabel}>Sandbox</Link>
      </div>
      
      <div className={styles.labelContainer}>
        <div className={styles.questionsLabel}>
          <Link href="/battle">CSS Battles &#11088;</Link>
        </div>
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