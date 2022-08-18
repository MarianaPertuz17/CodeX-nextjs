
import { ListItem } from '../listItem';
import styles from './styles.module.css';


export function TestResult ({tests, params}) {
  console.log(tests, 'testtt')
  return(
    <div className={styles.container}>
      <span className={styles.error}>Uh oh ... Looks like some tests did not pass</span>
      {tests && tests.map((test) => <ListItem key={0} item={test} list={tests} type='test' params={params}/>)}
    </div>
  )
}