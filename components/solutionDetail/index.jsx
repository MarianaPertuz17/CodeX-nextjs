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
        <button onClick={handleBack} style={{color:'white', fontSize: '16px', marginBottom:'1vh', background:'none', border:'none'}}>
          <span  style={{color:'white', fontSize: '35px'}}>&#x2190;</span> Back</button> 
        
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