import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { javascript } from '@codemirror/lang-javascript';
import styles from './styles.module.css';
import { useState, useCallback, useEffect } from 'react';
import { ExerciseDetail } from '../../components/exerciseDetail';
import { NavBar } from '../../components/navBar';
import { Spinner } from '../../components/spinner';
import { TestResult } from '../../components/testResult';
import { url } from '../../config';
import { useUser } from '@auth0/nextjs-auth0';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import { AppContext } from './context';
import { LabelBar } from '../../components/labelBar';
import { SolutionsContainer } from '../../components/solutions';


export async function getServerSideProps(context) {
  const { id } = context.query;
  // Fetch exercises
  const res = await fetch(`${url}/exercises/${id}`);
  const exercise = await res.json();

  // Fetch tests
  const res2 = await fetch(`${url}/test/${exercise.id}`);
  const tests = await res2.json();

  // Fetch solutions
  const res3 = await fetch(`${url}/solutions/${exercise.id}`);
  const solutions = await res3.json();

  return {
    props: { exercise, tests, solutions },
  }
}

export default function Sandbox ({exercise, tests, solutions}) {

  const [ codeString, setCodeString ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ showTestResult, setShowTestResult ] = useState(false);
  const [ result, setResult ] = useState([]);
  const [ showSolutions, setShowSolutions ] = useState(false);
  const [ solutionDetail, setSolutionDetail ] = useState(false);

  const { user } = useUser();
  console.log(solutions, 'las so')

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
    setShowTestResult(false);
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
      console.log(result, 'test')
      if (showTestResult && result.every(ele => ele.passed === true)) {
        toast.success('Your exercise has been submitted', {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }); 
        await updateUserExercises(user.sub);         
      } else {
        toast.error(`You haven´t passed all the tests`, {
          position: "top-right",
          autoClose: 4000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } else {
      toast.error('You have to login first', {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    
  }

  const promptHandler = (prompt) => {
    console.log('in prompt handler');
    if (prompt === 'solutions') setShowSolutions(true);
    else setShowSolutions(false);
  }

  const handleClick = () => {
    setSolutionDetail(true);
  }

  const handleBack = () => {
    setSolutionDetail(false);
  }

  return(
    <div style={{display:'flex', flexDirection:'column', background:'#040428'}}>
      <NavBar/>  
      <div className={styles.container} >
        <ToastContainer />
        <div className={styles.innerContainer}>
          <div className={styles.questionContainer}>    
            <LabelBar promptHandler={promptHandler} showSolutions={showSolutions}/>     
            {!showSolutions && exercise && <ExerciseDetail exercise={exercise}/>}
            {showSolutions && <AppContext.Provider value={{tests: result, solutionDetail, handleClick, handleBack, solutions}}><SolutionsContainer/></AppContext.Provider>}
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