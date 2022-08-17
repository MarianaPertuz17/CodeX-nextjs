
import { TestList } from '../testList';
import styles from './styles.module.css';

export function TestResult ({functionToTest, tests}) {
  
  return(
    <div style={{color:'white', padding:'25px', display:'flex', flexDirection:'column', alignItems:'center', fontFamily: 'Open Sans'}}>
      <span style={{color:'lightgray', fontWeight:'bolder', fontSize:'18px'}}>Uh oh ... Looks like some tests did not pass</span>
      <TestList tests={tests}/>
    </div>
     )
}