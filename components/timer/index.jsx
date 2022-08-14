import { useStopwatch } from 'react-timer-hook';
import playIcon from '../../public/assets/images/play.png';
import pauseIcon from '../../public/assets/images/pause.png';
import resetIcon from '../../public/assets/images/reset.png';
import Image from 'next/image';
import styles from './styles.module.css'

export function MyStopwatch() {
  const {
    seconds,
    minutes,
    hours,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });


  return (
    <div style={{textAlign: 'center', display:'flex', alignItems:'center'}}>
      <div style={{fontSize: '18px', color:'white', fontFamily:'Open Sans', marginRight:'10%'}}>
        <span>{hours < 10 ? `0${hours}`: hours}</span>:<span>{minutes< 10 ? `0${minutes}`: minutes}</span>:<span>{seconds < 10 ? `0${seconds}`: seconds}</span>
      </div>
      <button onClick={start} className={styles.button}>
        <Image
          src={playIcon}
          alt="play"
          layout='fill'
          objectFit='contain'
        />
      </button>
      <button onClick={pause} className={styles.button}>
      <Image
          src={pauseIcon}
          alt="pause"
          layout='fill'
          objectFit='contain'
        />
      </button>
      <button onClick={reset} className={styles.button}>
      <Image
          src={resetIcon}
          alt="reset"
          layout='fill'
          objectFit='contain'
        />
      </button>
    </div>
  );
}