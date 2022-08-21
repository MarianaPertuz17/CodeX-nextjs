import styles from './styles.module.css';

export function SolutionDetail ({handleBack}) {

  return(
    <div className={styles.container}>
      <button onClick={handleBack}>Back</button>
    </div>  
  )
}