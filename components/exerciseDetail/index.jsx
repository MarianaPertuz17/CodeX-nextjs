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
          {exercise.difficulty === 3 && <span>&#128992;</span> }
          {exercise.difficulty === 4 && <span>&#128308;</span> }
        </span>
        <span style={{marginLeft:'1vw'}}>Category: {exercise.category}</span>
      </div>
      <h2 className={styles.title}>{exercise.name}</h2>
      <span className={styles.description}>{exercise.description}</span>
      
      <p className={styles.p}>Sample Input</p>
      <div className={styles.sampleContainer}>{exercise.input}</div>
      
      <p className={styles.p}>Sample Ouput</p>
      <div className={styles.sampleContainer}>{exercise.output}</div>
      
      <p className={styles.p}>Hints</p>
      
      <HintList hintList={exercise.hints}/>
      <ListItem item = {exercise.bigO}/>
    </div>
    
  )
}