/* eslint-disable react/no-unknown-property */
import { useContext } from 'react';
import { AppContext } from '../../pages/sandbox/context';
import styles from './styles.module.css';
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { javascript } from '@codemirror/lang-javascript';


export function SolutionDetail () {
  const { exercise, handleBack, isOurSolution} = useContext(AppContext);
  const formattedCode = exercise.ourSolution.replaceAll('  ', '\n');

  return(
    <>
      {isOurSolution && 
      <div className={styles.container}>
        <button onClick={handleBack} className={styles.button}>
          <div  style={{color:'white', marginRight:10, fontSize:25, background:'red'}}>&#x2190;</div> 
          Back
          
        </button> 
        
        <CodeMirror
          value={formattedCode}
          height="200px"
          theme={dracula}
          extensions={[javascript({jsx:true})]}
        />
      </div> }

      {!isOurSolution &&
      <div className={styles.container}>
        <button onClick={handleBack}>nO ES NUESTRA</button>
      </div>
      }

    
    </>
     
  )
}