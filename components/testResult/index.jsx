
import { ListItem } from '../listItem';
import styles from './styles.module.css';


export function TestResult ({tests, params}) {
  
  const allTestsPassed = tests.every(ele => ele.passed === true);

  return(
    <div className={styles.container}>
      {!allTestsPassed && <span className={styles.error}>Uh oh ... Looks like some tests did not pass</span>}
      {allTestsPassed && <span className={styles.error}>{`Congrats! You've passed all the tests`}</span>}
      {tests && tests.map((test) => <ListItem key={0} item={test} list={tests} type='test' params={params}/>)}
    </div>
  )
}