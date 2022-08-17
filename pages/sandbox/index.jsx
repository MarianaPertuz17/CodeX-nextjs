import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { javascript } from '@codemirror/lang-javascript';
import styles from './styles.module.css';
import { useState, useCallback, useEffect } from 'react';
import { MyStopwatch } from '../../components/timer';
import clock from '../../public/assets/images/clock.png';
import Image from 'next/image';
import { hintMock } from './mock';
import { ExerciseDetail } from '../../components/exerciseDetail';
import { NavBar } from '../../components/navBar';

export default function Sandbox () {

  const [ exercise, setExercise ] = useState();

  const url= 'http://localhost:3000/api/exercises'

  const fetchExercise = async() => {
    const res = await handleFetch();
    setExercise(res);
  }

  const handleFetch = () => {
    return fetch(`${url}/${1}`)
      .then(res => res.json())
      .then(data => data)
      .catch(e => e);
  }

  useEffect(() => {
    fetchExercise();
  }, []);

//   useEffect(()=> {
//     if(exercise) {
//     setCodeString(`function ${exercise.functionName}(${exercise.paramNames[0]}) {
//   // Write your code here.
//   return
// }`);}
//   }, [exercise]);

  const [codeString, setCodeString] = useState('');

  const parseFunction = (str)=> {
    return Function('"use strict";return (' + str + ')')();
  }

  const onChange = useCallback(value => {
    setCodeString(value)
  }, []);

  const handleRun = () => {
    const functionToTest = parseFunction(codeString);
    console.log(functionToTest);
  }


  return(
    <div style={{display:'flex', flexDirection:'column', background:'#040428'}}>
      <NavBar/>
      
      <div className={styles.container} >
      
        <div className={styles.innerContainer}>
          <div style={{width:'47%', height:'100%'}}>
          <div className={styles.labelButtonContainer}>
            <div style={{display:'flex'}}>
              <button className={styles.label}>Prompt </button>
              <button className={styles.label} style={{borderRadius:0, background:'#30304b'}}>Solutions</button>
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
          <div className={styles.questionContainer}>         
            {exercise && <ExerciseDetail exercise={exercise}/>}
          </div>

          </div>
          
          <div className={styles.codeEditor}>
            <div className={styles.labelContainer}>
              <div className={styles.label}>Javascript</div>
              <button className={styles.runButton} onClick={handleRun}>Run code</button>
            </div>
            
            <CodeMirror
              value={codeString}
              height="200px"
              theme={dracula}
              extensions={[javascript({jsx:true})]}
              onChange={onChange}
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