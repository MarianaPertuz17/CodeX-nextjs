import styles from './styles.module.css';
import moment from 'moment';

export function SolutionItem ({solution, handleClick}) {

  const {title, createdAt, userId} = solution;
  const formattedDate = moment(createdAt).format('MMMM Do YYYY, h:mm a');

  return(
    <button className={styles.container} onClick={() => handleClick(solution)}>
      <span style={{fontWeight:'bold'}}>{title}</span>
      <span className={styles.date}>shared on {formattedDate} by {userId ? userId : `Anonymous User`}</span> 
    </button>  
  )
}