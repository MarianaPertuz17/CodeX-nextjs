import { complexityMock } from '../../pages/sandbox/mock';
import { HintList } from '../hintList';
import { ListItem } from '../listItem';
import styles from './styles.module.css';


export function ExerciseDetail ({exercise}) {
  console.log(exercise, 'pa to')
  return(
    <div className={styles.container}>
      <div>
        <span>Difficulty: {exercise.difficulty}</span>
        <span>Category:</span>
      </div>
      <h1>{exercise.name}</h1>
      <span style={{fontSize:14}}>{exercise.description}</span>
      <p className={styles.p}>Sample Input</p>
      <div className={styles.sampleContainer}>{exercise.input}</div>
      <p className={styles.p}>Sample Ouput</p>
      <div className={styles.sampleContainer}>{exercise.output}</div>
      <p className={styles.p}>Hints</p>
      <HintList hintList={exercise.hints}/>
      <ListItem item = {complexityMock}/>
    </div>
    
  )
}