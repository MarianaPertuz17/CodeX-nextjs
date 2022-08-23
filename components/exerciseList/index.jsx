import styles from './styles.module.css';
import {ExerciseTab} from '../excerciseTab'


export function ExerciseList(props) {
  return (
    <div className={styles.exer}>
        {props.exercises.map((e) => {
           return  <ExerciseTab
           exercise = {e}
           key = {e.id}
           />
        })}    
    </div>
  )
}

