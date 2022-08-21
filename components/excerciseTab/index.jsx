import Link from 'next/link'

export function ExerciseTab({exercise}) {  
  return (
    <Link href= {`/sandbox/${exercise.id}`}>
      <div>{exercise.name}</div>
    </Link>
  )
}

