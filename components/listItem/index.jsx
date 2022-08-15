import styles from './styles.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faChevronDown,
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

export function ListItem ({item, list, hint}) {
  const [ isOpen, setIsOpen ] = useState(false);

  const handleClick = () => {
    setIsOpen(prevState => !prevState)
  }

  return(
    <div className={styles.container}>
      <div style={{fontWeight:'bold', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        {hint ? `Hint ${list.indexOf(item)+1}` : `Optimal Space and Time Complexity`}
        <button style={{cursor:'pointer', background:'none', border:'none'}} onClick={handleClick}>
          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            style={{color:'white', fontSize:23}}
            //style={isOpen ? styles.arrowUp : styles.arrowDown }
          />
        </button>
      </div>
      <div className={isOpen ? styles.openItem : styles.item}>{item}</div>
    </div>
  )
}