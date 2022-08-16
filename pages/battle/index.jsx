// import 'codemirror/keymap/sublime';
// import 'codemirror/theme/dracula.css';
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { html } from '@codemirror/lang-html';
import styles from './styles.module.css';
import { useState, useCallback } from 'react';
import { MyStopwatch } from '../../components/timer';
import clock from '../../public/assets/images/clock.png';
import Image from 'next/image';
import { hintMock } from './mock';
import { ExerciseDetail } from '../../components/exerciseDetail';
import logo from '../../public/assets/images/logo.png'
import { NavBar } from '../../components/navBar';

export default function CSSBattle () {

  const [codeString, setCodeString] = useState(`<div></div>
  <style>
    div {
      width: 100px;
      height: 100px;
      background: #dd6b4d;
    }
  </style>
  
  <!-- OBJECTIVE -->
  <!-- Write HTML/CSS in this editor and replicate the given target image in the least code possible. What you write here, renders as it is --><`);


  const onChange = useCallback(value => {
    setCodeString(value)
  }, []);


  return(
    <div style={{display:'flex', flexDirection:'column', background:'#20045c'}}>
      <NavBar/>
      
      <div className={styles.container} >
      
        <div className={styles.innerContainer}>
          
          <div className={styles.codeEditor}>
            <div className={styles.labelContainer}>
              <div className={styles.label}>Html</div>
            
            </div>
            
            <CodeMirror
              value={codeString}
              height="200px"
              theme={dracula}
              extensions={[html()]}
              onChange={onChange}
            />            
         
          </div>

          <div style={{width:'43%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <div style={{width:'100%', height:'49%', display:'flex', flexDirection:'column'}}>
              <div className={styles.labelContainer}>
                <div className={styles.label}>Output</div>
              </div>
              <div className={styles.outputContainer}>
                <iframe srcDoc={codeString} height={300} width={400}></iframe>
              </div>
            </div>

            <div style={{width:'100%', height:'49%', display:'flex', flexDirection:'column'}}>
              <div className={styles.labelContainer}>
                <div className={styles.label}>Target</div>
              </div>
              <div className={styles.outputContainer}>
                <iframe src="https://cssbattle.dev/targets/25.png" height={300} width={400}></iframe>
              </div>
            </div>
            

          </div>
          
        </div>
        
      </div>
    </div>
    
    
  )
}