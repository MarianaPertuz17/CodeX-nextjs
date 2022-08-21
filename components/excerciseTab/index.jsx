import Link from 'next/link'
import styles from './styles.module.css';

export function ExerciseTab({exercise}) {  
  return (
    <>
    <Link  href= {`/sandbox/${exercise.id}`}>
    <div className={styles.tab}>    
      <div className={styles.exerciseName}>{exercise.name} </div>    
    {exercise.difficulty === 1 &&
    <div className={styles.corner}   style = {{ backgroundColor: 'green'}}></div>
    }
    {exercise.difficulty === 2 &&
    <div className={styles.corner}   style = {{ backgroundColor: 'yellow'}}></div>
    }
    {exercise.difficulty === 3 &&
    <div className={styles.corner}   style = {{ backgroundColor: 'orange'}}></div>
    }
    {exercise.difficulty === 4 &&
    <div className={styles.corner}   style = {{ backgroundColor: 'red'}}></div>
    }    
    </div>
    </Link>
    </>
  )
}

