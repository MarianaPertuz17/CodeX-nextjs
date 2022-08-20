import spaceman from '../public/assets/images/spaceman.png';
import whiteFloor from '../public/assets/images/landing_down.png'
import planet from '../public/assets/images/planet.png';
import rocket from '../public/assets/images/rocket.png';
import { NavBar } from '../components/navBar';
import styles from './styles.module.css';
import Image from 'next/image';


export default function Home () {
  return(
    <div className={styles.container}>
      <NavBar/>
      <div className={styles.welcomeContainer}>
        <div className={styles.textContainer}>
          <span className={styles.title}>Get Ready to land your new dream</span>
          <span className={styles.title}>job.</span>
          <span className={styles.text}>Find multiple questions that will get you prepared to ace any tech interview!</span>
        </div>
        <div style={{position: 'absolute'}}>
          <div className={styles.spaceman}>
            <Image
              src={spaceman}
              alt="spaceman"
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>        
      </div>

      <div className={styles.whiteFloor}>
        <Image
          src={whiteFloor}
          alt="whiteFloor"
          layout='fill'
          objectFit='cover'
        />
      </div>
      

      <div className={styles.firstCardContainer}>  
          <div className={styles.planet}>
            <Image
              src={planet}
              alt="planet"
              layout='fill'
              objectFit='contain'
            />
          </div>
         
        <div className={styles.h1}>Over 100 coding interview questions and 125,000 satisfied developers!</div>
      </div>

      

      <div className={styles.cssContain}>
        <div className={styles.cssBattleText}>Not new to frontend? Test your knowledge in CSS Battles!</div>
        
      </div>

      <div className={styles.secondCardContainer}>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span className={styles.lastTitle}>Your new</span>
          <span className={styles.lastTitle}>adventure</span>
          <span className={styles.lastTitle}>starts right now.</span>
        </div>

        <div style={{position:'absolute', top:'20%', left:'55%'}}>
          <div className={styles.rocket}>
            <Image
              src={rocket}
              alt="rocket"

              />
          </div>
        </div>   
          
      </div>
    </div>
  )
}