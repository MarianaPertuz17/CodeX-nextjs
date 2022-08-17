import styles from './styles.module.css';
import { NavBar } from '../../components/navBar';

export default function Questions () {
  return(
    <div style={{display:'flex', flexDirection:'column', background:'#20045c'}}>
      <NavBar/>
        <div className={styles.header} >
          <h1> Lets Practice! </h1>
        </div>

      <div className={styles.dashboard}>
        <div className='completed'>
          <h1> % completed problems</h1>
        </div>


        <div className='categorySelect'>
          <button> Category </button>
          <button> Difficulty</button>
        </div>


        <div className='excerciseTabs'></div>
      </div>
    </div>
  )
}