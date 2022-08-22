import { useContext } from 'react';
import { AppContext } from '../../pages/sandbox/context';
import styles from './styles.module.css';


export function TestDetail ({item}) {
  const {input, expectedOutput, receivedOut} = item;
  const { params } = useContext(AppContext);

  return(
    <div className={styles.container}>
      <h6 className={styles.title}>Expected output</h6>
      <code className={styles.output}>{JSON.stringify(expectedOutput)}</code>
      <h6 className={styles.title}>Your output</h6>
      <code className={styles.output}>{receivedOut === undefined ? 'undefined' : JSON.stringify(receivedOut)}</code>
      <h6 className={styles.title}>Input</h6>
      <code className={styles.output}>
        {input.length>0 ? input.map((e, index) => {
          return <code className={styles.code} key={index}>{params[index]} = {JSON.stringify(e)}</code>
        }) : <code className={styles.code}>{params[0]} = {input}</code>}
      </code> 
      
      
    </div>
    
  )
}