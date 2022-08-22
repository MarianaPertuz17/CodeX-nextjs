import Link from 'next/link'
import styles from './styles.module.css';
import { useContext } from 'react';
import { MainContext } from '../../pages/questions/context';
import { AiFillLock } from 'react-icons/ai';

export function ExerciseTab({exercise}) {  
  const {user1} = useContext(MainContext)

  
  return (
    <>
    {!user1.paidUser  && exercise.isFree &&
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
     }

   {!user1.paidUser  && !exercise.isFree &&
    <Link  href= {`/purchase`}>
    <div className={styles.tabUnpaid}>    
      <div className={styles.exerciseName}>
        <span className= {styles.exerciseNameUni}> {exercise.name} </span>
        <span className= {styles.payment}>  <AiFillLock/> </span>
       </div>    
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
     }

   {user1.paidUser  &&
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
     }
    </>
  )
}

