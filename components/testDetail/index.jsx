import { useContext } from 'react';
import { AppContext } from '../../pages/sandbox/context';
import styles from './styles.module.css';


export function TestDetail ({item}) {
  const {input, expectedOutput, receivedOut} = item;
  const { params } = useContext(AppContext);

  return(
    <div className={styles.container}>
      <h3>Expected output</h3>
      <code className={styles.output}>{JSON.stringify(expectedOutput)}</code>
      <h3>Your output</h3>
      <code className={styles.output}>{receivedOut === undefined ? 'undefined' : JSON.stringify(receivedOut)}</code>
      <h3>Input</h3>
      <code className={styles.output}>
        {input.length>0 ? input.map((e, index) => {
          return <code key={index}>{params[index]} = {JSON.stringify(e)}</code>
        }) : <code>{params[0]} = {input}</code>}
      </code> 
      
      
    </div>
    
  )
}