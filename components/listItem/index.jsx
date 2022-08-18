import styles from './styles.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';

export function ListItem ({item, list, type, functionToTest}) {
  const [ isOpen, setIsOpen ] = useState(false);
  let testResult;
  const [result, setResult] = useState(false);

  const handleClick = () => {
    setIsOpen(prevState => !prevState)
  }

  useEffect(() => {
    if (type === 'test') {
      console.log(item)
      const args = JSON.parse(item.testInput);
      testResult = functionToTest(...args);
      setResult(testResult)
      console.log(result, 'el test espero')
    }
  }, [])
  
  

  return(
    <div className={styles.container}>
      <div style={{fontWeight:'bold', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        {type ==='hint' && `Hint ${list.indexOf(item)+1}`}
        {type ==='test' && `Test ${list.indexOf(item)+1}`}
        {type !=='test' &&  type !=='hint' && `Optimal Space and Time Complexity`}
        <button style={{cursor:'pointer', background:'none', border:'none'}} onClick={handleClick}>
          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            style={{color:'white', fontSize:23}}
          />
        </button>
      </div>
      <div className={isOpen ? styles.openItem : styles.item}>
        {type !== 'test' && item}
        {type === 'test' && testResult}
      </div>
    </div>
  )
}