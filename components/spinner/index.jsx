
import styles from './styles.module.css';

export function Spinner () {
  
  return(
    <div className={styles.container}>
      <div className= {styles.spinner}>
        <div className= {styles.cube1}></div>
        <div className= {styles.cube2}></div>
      </div>
    </div>
     )
}