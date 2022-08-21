import styles from './styles.module.css';
import { MyStopwatch } from '../timer';
import clock from '../../public/assets/images/clock.png';
import Image from 'next/image';

export function LabelBar ({promptHandler, showSolutions}) {

  const handler = (prompt) => {
    promptHandler(prompt);
  }
  
  return(
    <div className={styles.labelButtonContainer}>
      <div style={{display:'flex', height:'100%'}}>
        <button className={styles.label} onClick={() => handler('prompt')} style={!showSolutions ? {background:'#202049'} : {background:'#30304b'}}>Prompt </button>
        <button className={styles.label} onClick={() => handler('solutions')} style={showSolutions ? {background:'#202049'} : {background:'#30304b'}}>Solutions</button>
      </div>
        
        <div className={styles.clockContainer}>
          <Image
            src={clock}
            alt="clock"
            height='20px'
            width='20px'
          />
          <MyStopwatch/>
        </div>
    </div>
     )
}