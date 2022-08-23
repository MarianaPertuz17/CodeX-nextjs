
import { ListItem } from '../listItem';
import styles from './styles.module.css';
import { AppContext } from '../../context';
import { useContext } from 'react';

export function TestResult () {
  const { tests } = useContext(AppContext);
  const allTestsPassed = tests.every(ele => ele.passed === true);

  return(
    <div className={styles.container}>
      {!allTestsPassed && <span className={styles.error}>Uh oh ... Looks like some tests did not pass</span>}
      {allTestsPassed && <span className={styles.error}>{`Congrats! You've passed all the tests`}</span>}
      {tests.map((test, index) => <ListItem key={index} item={test} list={tests} type='test'/>)}
    </div>
  )
}