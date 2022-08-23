
import styles from './styles.module.css';

export function Spinner ({background}) {
  console.log(background)
  return(
    <div className={styles.container}>
      <div className= {styles.spinner}>
        <div className= {styles.cube1} style= {background && {backgroundColor:`${background}`}} ></div>
        <div className= {styles.cube2} style= {background && {backgroundColor:`${background}`}}></div>
      </div>
    </div>
     )
}