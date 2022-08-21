import styles from './styles.module.css';
import moment from 'moment';

export function SolutionItem ({solution, handleClick}) {

  const {title, createdAt} = solution;
  const formattedDate = moment(createdAt).format('MMMM Do YYYY, h:mm:ss');

  return(
    <button className={styles.container} onClick={handleClick}>
      <span style={{fontWeight:'bold'}}>{title}</span>
      <span style={{color:'lightgray', fontSize:'12px'}}>shared on {formattedDate} by Anonymous User</span> 
    </button>  
  )
}