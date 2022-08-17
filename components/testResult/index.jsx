
import { TestList } from '../testList';
import styles from './styles.module.css';

export function TestResult ({functionToTest, tests}) {
  
  return(
    <div className={styles.container}>
      <span className={styles.error}>Uh oh ... Looks like some tests did not pass</span>
      <TestList functionToTest={functionToTest} tests={tests}/>
    </div>
  )
}