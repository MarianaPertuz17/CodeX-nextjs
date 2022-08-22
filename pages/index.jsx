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

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "hobby", "job", "life" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return(
    <div className={styles.container}>
      <NavBar/>
      <div className={styles.welcomeContainer}>
        <div className={styles.textContainer}>
          <span className={styles.title}>Get Ready to land</span>
          <span className={styles.title}>your new dream</span>
          <span className={styles.title}><span className={styles.txtRotate} dataPeriod="1000" data-rotate='[ "hobby", "job", "life" ]'><span className={styles.wrap}>{text}</span></span></span>
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