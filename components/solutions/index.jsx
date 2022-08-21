import { SolutionItem } from '../solutionItem';
import { AppContext } from '../../pages/sandbox/context';
import styles from './styles.module.css';
import { useContext, useState } from 'react';
import { SolutionDetail } from '../solutionDetail';

export function SolutionsContainer () {

  const {solutionDetail, handleClick, handleBack, solutions} = useContext(AppContext);

  return(
    <div className={styles.container}>
      {!solutionDetail ?
      <>
        <span className={styles.title}>Our solutions</span>
        <button className={styles.solutionButton} onClick={handleClick}>Solution 1</button>
        <div style={{display:'flex', justifyContent:'space-between', marginTop:'6vh'}}>
          <span className={styles.title}>User solutions</span>
          <button className={styles.shareButton}>Share +</button>
        </div> 
        {solutions.map((solution, index) => <SolutionItem key={index} solution={solution} handleClick={handleClick}/>)} 
      </> :
      <SolutionDetail handleBack={handleBack}/>
      }
    </div>   
  )
}