import { HintList } from '../hintList';
import { ListItem } from '../listItem';
import styles from './styles.module.css';


export function SolutionsContainer ({exercise}) {

  return(
    <div className={styles.container}>
      <span>Our solutions</span>
      <button className={styles.solutionButton}>Solution 1</button>
      <div style={{display:'flex', justifyContent:'space-between', marginTop:'4vh'}}>
        <span>User solutions</span>
        <button className={styles.shareButton}>Share +</button>
      </div>
      
          
    </div>
    
  )
}