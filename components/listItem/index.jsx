import styles from './styles.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

export function ListItem ({item, list, type}) {
  const [ isOpen, setIsOpen ] = useState(false);

  const handleClick = () => {
    setIsOpen(prevState => !prevState)
  }

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
        {type === 'test' && 'hola'}
      </div>
    </div>
  )
}