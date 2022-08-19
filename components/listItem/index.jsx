import styles from './styles.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import { TestDetail } from '../testDetail';

export function ListItem ({item, list, type, params}) {
  const [ isOpen, setIsOpen ] = useState(false);


  const handleClick = () => {
    setIsOpen(prevState => !prevState)
  }


  return(
    <div className={styles.container}>
      <div style={{fontWeight:'bold', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        {type ==='hint' && `Hint ${list.indexOf(item)+1}`}
        {type ==='test' && item.passed && <span>&#x2705; Test {list.indexOf(item)+1}</span>}
        {type ==='test' && !item.passed && <span>	&#10060; Test {list.indexOf(item)+1}</span>}
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
        {type === 'test' && <TestDetail item={item}/>}
      </div>
    </div>
  )
}