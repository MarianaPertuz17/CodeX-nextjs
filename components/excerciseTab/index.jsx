// import styles from './styles.module.css';
import Link from 'next/link'

export function ExerciseTab({exercise}) {  
  const handleClick = (id) => {

  }

  return (
    <>  
    <Link href= {`/api/exercises/${exercise.id}`}>
    <div >{exercise.name}</div>
    </Link>
    </>
  )
}

