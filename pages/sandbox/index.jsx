import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { javascript } from '@codemirror/lang-javascript';
import styles from './styles.module.css';
import { useState, useCallback, useEffect } from 'react';
import { MyStopwatch } from '../../components/timer';
import clock from '../../public/assets/images/clock.png';
import Image from 'next/image';
import { ExerciseDetail } from '../../components/exerciseDetail';
import { NavBar } from '../../components/navBar';
import { Spinner } from '../../components/spinner';
import { TestResult } from '../../components/testResult';
import _ from 'lodash';

export default function Sandbox () {

  const [codeString, setCodeString] = useState('');
  const [ exercise, setExercise ] = useState();
  const [ tests, setTests ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ showTestResult, setShowTestResult ] = useState(false);
  const [ result, setResult ] = useState([]);
  // const [ functionToTest, setFunctionToTest] = useState();
  const url= 'http://localhost:3000/api';

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
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


  const handleFetch = async() => {
    const resExercise = await fetchExercise();
    setExercise(resExercise);
    if (resExercise) {
      const resTests = await fetchTests(resExercise.id);
      setTests(resTests);
    }
  }


  const fetchExercise = () => {
    return fetch(`${url}/exercises/${1}`)
      .then(res => res.json())
      .then(data => data)
      .catch(e => e);
  }

  const fetchTests = (id) => {
    return fetch(`${url}/test/${id}`)
      .then(res => res.json())
      .then(data => data)
      .catch(e => e);
  }

  const parseFunction = (str)=> {
    return Function('"use strict";return (' + str + ')')();
  }

  const onChange = useCallback(value => {
    setCodeString(value)
  }, []);

  const handleRun = () => {
    // setResult([]);
    const functionToTest = parseFunction(codeString);
    tests.map(test => {
      const args = JSON.parse(test.testInput);
      const output = JSON.parse(test.testOutput)
      const testResult = functionToTest(...args);
      if (testResult === output) {
        setResult(prevState => [...prevState, {passed: true, input: args, expectedOutput: output, receivedOut: testResult }]);
      } else {
        setResult(prevState => [...prevState, {passed: false, input: args, expectedOutput: output, receivedOut: testResult}]);
      }
      console.log(result, 'el resu')
      
    })
    setLoading(true);
    
  }
  

  const functionToTest = (param1, param2) => {
    return parseFunction(codeString)(param1,param2);
  }

  const handleSubmit = () => {
    
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
              <button className={styles.submitButton} onClick={handleSubmit}>Submit code</button>
            </div>
            
            <div className={styles.outputContainer}>
              { loading && <Spinner/> }
              { showTestResult && tests && <TestResult tests={result} params={exercise.paramNames}/> }
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
    
  )
}