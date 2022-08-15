// import 'codemirror/keymap/sublime';
// import 'codemirror/theme/dracula.css';
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { javascript } from '@codemirror/lang-javascript';
import styles from './styles.module.css';
import { useState } from 'react';
import { MyStopwatch } from '../../components/timer';
import clock from '../../public/assets/images/clock.png';
import Image from 'next/image';
import { HintList } from '../../components/hintList';
import { hintMock } from './mock';
import { ExerciseDetail } from '../../components/exerciseDetail';
import logo from '../../public/assets/images/logo.png'

export default function Sandbox () {

  const [code, setCode] = useState('');
  const [openTimer, setOpenTimer] = useState(false);

  return(
    <div style={{display:'flex', flexDirection:'column', background:'#20045c'}}>
      <div style={{position: 'relative', width:'150px', height:'10vh', marginLeft:'20px'}}>
        <Image
          src={logo}
          alt="logo"
          layout='fill'
          objectFit='contain'
        />
      </div>
      
      <div className={styles.container} >
      
        <div className={styles.innerContainer}>
          <div className={styles.questionContainer}>
            <div className={styles.clockContainer}>
              <div style={{position: 'relative', width:'25%', height:'100%'}}>
                <Image
                  src={clock}
                  alt="clock"
                  height='100%'
                  width='35px'
                  layout='fill'
                  objectFit='contain'
                />
              </div>   
              <div>
               <MyStopwatch/>
              </div>
            </div>
            <ExerciseDetail hintMock={hintMock}/>
          </div>
          <div className={styles.codeEditor}>
            <div className={styles.labelContainer}>
              <div className={styles.label}>Javascript</div>
              
              <button className={styles.runButton}>Run code</button>
            </div>
            
            <CodeMirror
              value={code}
              height="200px"
              theme={dracula}
              extensions={[javascript({ jsx: true })]}
            />
             <div className={styles.labelContainer}>
              <div className={styles.label}>Output</div>
              <button className={styles.submitButton}>Submit code</button>
             </div>
            
            <div className={styles.outputContainer}></div>
          </div>
        </div>
        
      </div>
    </div>
    
    
  )
}