import spaceman from '../public/assets/images/spaceman.png';
import whiteFloor from '../public/assets/images/landing_down.png'
import planet from '../public/assets/images/planet.png';
import rocket from '../public/assets/images/rocket.png';
import { NavBar } from '../components/navBar';
import styles from './styles.module.css';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';


export default function Home () {
  const { ref: rocketRef, inView: rocketIsVisible  } = useInView();
  const { ref: planetTextRef, inView: planetTextIsVisible  } = useInView();
  const { ref: cssTextRef, inView: cssTextIsVisible  } = useInView();

  return(
    <div className={styles.container}>
      <NavBar/>
      <div className={styles.welcomeContainer}>
        <div className={styles.textContainer}>
          <span className={styles.title}>Get Ready to land</span>
          <span className={styles.title}>your new dream</span>
          <div className={styles.words}>
            <span className={styles.span}>life</span>
            <span className={styles.span}>future</span>
            <span className={styles.span}>hobby</span>
            <span className={styles.span}>job</span>
            <span className={styles.span}>life</span>
          </div>
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
         
        <div ref={planetTextRef} className={`${styles.h1} ${planetTextIsVisible ? styles.appear : ''}`}>Over 100 coding interview questions and 125,000 satisfied developers!</div>
      </div>

      

      <div className={styles.cssContain}>
        <div ref={cssTextRef} className={`${styles.cssBattleText} ${cssTextIsVisible ? styles.appear : ''}`}>Not new to frontend? Test your knowledge in CSS Battles!</div>
        
      </div>

      <div className={styles.secondCardContainer}>
        <div style={{display:'flex', flexDirection:'column'}}>
          <span className={styles.lastTitle}>Your new</span>
          <span className={styles.lastTitle}>adventure</span>
          <span className={styles.lastTitle}>starts right now.</span>
        </div>

        <div style={{position:'absolute', top:'20%', left:'55%'}} ref={rocketRef}>
          <div className={`${styles.rocket} ${rocketIsVisible ? styles.animateRocket : ''}`}>
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