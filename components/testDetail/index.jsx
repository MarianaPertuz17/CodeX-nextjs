import { useContext } from 'react';
import { AppContext } from '../../pages/sandbox';
import styles from './styles.module.css';


export function TestDetail ({item}) {
  const {input, expectedOutput, receivedOut} = item;
  const { params } = useContext(AppContext);

  return(
    <div className={styles.container}>
      <span>Expected output</span>
      <div>{JSON.stringify(expectedOutput)}</div>
      <span>Your output</span>
      <span>{receivedOut === undefined ? 'undefined' : JSON.stringify(receivedOut)}</span>
      <span>Input</span>
      {input.length>0 ? input.map((e, index) => {
        return <span key={index}>{params[index]} = {JSON.stringify(e)}</span>
      }) : <span>{params[0]} = {input}</span>}
      
    </div>
    
  )
}