import styles from './styles.module.css';
import {ExerciseTab} from '../excerciseTab'


export function ExerciseList(props) {
  console.log(props.exercises, 'el que lleha' )
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

