import { useContext } from 'react';
import { AppContext } from '../../pages/sandbox/context';
import styles from './styles.module.css';
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { javascript } from '@codemirror/lang-javascript';
import Image from 'next/image';
import back from '../../public/assets/images/back-arrow.png'
import moment from 'moment';

export function SolutionDetail () {
  const { exercise, handleBack, userSolution} = useContext(AppContext);
  const formattedCode = exercise.ourSolution.replaceAll('  ', '\n');
  
  let formattedUserCode;
  let explanation;
  let title;
  let formattedDate;
  
  if (userSolution) {
    formattedUserCode = userSolution.solution.replaceAll('  ', '\n');
    explanation = userSolution.explanation;
    title = userSolution.title;
    formattedDate = moment(userSolution.createdAt).format('MMMM Do YYYY, h:mm:ss');
  }

  return(
    <>
      <button onClick={handleBack} className={styles.button}>
        <Image
          src={back}
          alt="back"
          height='20px'
          width='20px'
        />
        <span style={{marginLeft:'0.5vw'}}>Back</span>
      </button> 
      <div className={styles.container}>
        {!userSolution && 
          <CodeMirror
            value={formattedCode}
            height="200px"
            theme={dracula}
            extensions={[javascript({jsx:true})]}
          />
        }

        {userSolution &&
          <>
            <h4 style={{marginTop:'2vh'}}>{title}</h4>
            <span style={{color:'lightgray', fontSize:'12px'}}>shared on {formattedDate} by {userSolution.userId ? userSolution.userId : `Anonymous User`}</span> 
            <h4 style={{marginTop:'4vh'}}>Explanation</h4>
            <span style={{color:'lightgray', fontSize:'15px'}}>{explanation.length > 1 ? explanation : `No explanation was provided.`}</span>
            <h4 style={{marginTop:'4vh'}}>Code</h4>
            <CodeMirror
              value={formattedUserCode}
              height="200px"
              theme={dracula}
              extensions={[javascript({jsx:true})]}
            />
          </>
        }

      </div>   
    </>
     
  )
}