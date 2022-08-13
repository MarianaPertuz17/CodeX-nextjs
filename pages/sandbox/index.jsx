// import 'codemirror/keymap/sublime';
// import 'codemirror/theme/dracula.css';
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { javascript } from '@codemirror/lang-javascript';
import styles from './styles.module.css';
import { useState } from 'react';


export default function Sandbox () {

  const [code, setCode] = useState('');

  return(
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.questionContainer}></div>
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
    </>
    
    
  )
}