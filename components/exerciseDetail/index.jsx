import { complexityMock } from '../../pages/sandbox/mock';
import { HintList } from '../hintList';
import { ListItem } from '../listItem';
import styles from './styles.module.css';


export function ExerciseDetail ({hintMock}) {

  return(
    <div className={styles.container}>
      <div>
        <span>Difficulty:</span>
        <span>Category:</span>
      </div>
      <h1>Title</h1>
      <span style={{fontSize:14}}>Description</span>
      <p className={styles.p}>Sample Input</p>
      <div className={styles.sampleContainer}></div>
      <p className={styles.p}>Sample Ouput</p>
      <div className={styles.sampleContainer}></div>
      <p className={styles.p}>Hints</p>
      <HintList hintList={hintMock}/>
      <ListItem item = {complexityMock}/>
    </div>
    
  )
}