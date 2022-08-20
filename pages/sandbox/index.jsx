import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { javascript } from '@codemirror/lang-javascript';
import styles from './styles.module.css';
import { useState, useCallback, useEffect, createContext } from 'react';
import { MyStopwatch } from '../../components/timer';
import clock from '../../public/assets/images/clock.png';
import Image from 'next/image';
import { ExerciseDetail } from '../../components/exerciseDetail';
import { NavBar } from '../../components/navBar';
import { Spinner } from '../../components/spinner';
import { TestResult } from '../../components/testResult';
import { url } from '../../config';
import { useUser } from '@auth0/nextjs-auth0';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  

export const AppContext = createContext();

export async function getServerSideProps() {
  // Fetch exercises
  const res = await fetch(`${url}/exercises/${1}`);
  const exercise = await res.json();

  // Fetch tests
  const res2 = await fetch(`${url}/test/${exercise.id}`);
  const tests= await res2.json();
  
  return {
    props: { exercise, tests },
  }
}

export default function Sandbox ({exercise, tests}) {

  const [ codeString, setCodeString ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ showTestResult, setShowTestResult ] = useState(false);
  const [ result, setResult ] = useState([]);

  const { user } = useUser();


  useEffect(() => {
    console.log('mounted')
    if (loading) {
      setTimeout(() => {
        setShowTestResult(true);
        setLoading(false);
    }, 2000);
    }
  }, [loading]);


  useEffect(()=> {
    if(exercise) {
    setCodeString(`function ${exercise.functionName}(${exercise.paramNames.join(',')}) {
  // Write your code here.
  return
}`);}
  }, [exercise]);


  const parseFunction = (str)=> {
    return Function('"use strict";return (' + str + ')')();
  }

  const onChange = useCallback(value => {
    setCodeString(value)
  }, []);

  const handleRun = () => {
    const functionToTest = parseFunction(codeString);
    const result = [];
    tests.forEach(test => {
      const args = JSON.parse(test.testInput);
      const output = JSON.parse(test.testOutput)
      const testResult = functionToTest(...args);
      if (testResult === output) {
        result.push({passed: true, input: args, expectedOutput: output, receivedOut: testResult });
      } else {
        result.push({passed: false, input: args, expectedOutput: output, receivedOut: testResult});
      }
      
    })
    setResult(result);
    setLoading(true);
    
  }
  
  const updateUserExercises = (id) => {
    return fetch(`${url}/userex/${id}`, {
      method: 'PUT',
      body: JSON.stringify({exerciseId: exercise.id})
    })
      .then(res => res.json())
      .then(data => data)
      .catch(e => e);
  }

  const handleSubmit = async() => {
    if ( user ) {
      const {res, error} = await updateUserExercises(user.sub);
    } else {
      toast.error('You have to login first', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    
  }


  return(
    <div style={{display:'flex', flexDirection:'column', background:'#040428'}}>
      <NavBar/>
      
      <div className={styles.container} >
      
        <div className={styles.innerContainer}>
        <ToastContainer />
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
              <button className={styles.submitButton} onClick={handleSubmit}>Submit code</button>
            </div>
            
            <div className={styles.outputContainer}>
              { loading && <Spinner/> }

              { showTestResult && tests && <AppContext.Provider value={{tests: result, params: exercise.paramNames}}><TestResult/></AppContext.Provider> }
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
    
  )
}