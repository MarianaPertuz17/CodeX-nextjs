import { complexityMock } from '../../pages/sandbox/mock';
import { HintList } from '../hintList';
import { ListItem } from '../listItem';
import styles from './styles.module.css';


export function ExerciseDetail ({exercise}) {

  return(
    <div className={styles.container}>
      <div>
        <span>Difficulty: 
          {exercise.difficulty === 1 && <span>&#128994;</span>} 
          {exercise.difficulty === 2 && <span>&#128993;</span>} 
          {exercise.difficulty === 3 && <span>&#128308;</span> }
        </span>
        <span style={{marginLeft:'1vw'}}>Category: {exercise.category}</span>
      </div>
      <h1>{exercise.name}</h1>
      <span style={{fontSize:14, textAlign:'justify'}}>{exercise.description}</span>
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