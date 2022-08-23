import styles from './styles.module.css';
import { NavBar } from '../../components/navBar';
import { useState, useEffect, useCallback } from 'react';
import { ExerciseList } from '../../components/exerciseList';
import { useUser } from '@auth0/nextjs-auth0';
import { MainContext } from '../../context';
import { Spinner } from '../../components/spinner';
import { url } from '../../config';

export async function getServerSideProps() {
  // Fetch exercises
  const res = await fetch(`${url}/exercises`);
  const exercises = await res.json();
  exercises.sort((a, b) => a.difficulty - b.difficulty);

  return {
    props: { exercises },
  }
}

export default function Questions ({exercises}) {
  
  const [loading, setLoading] = useState(true);
  const [ user1, setUser1 ] = useState([]);
  const easy = stateSetter('difficulty', 1);
  const medium = stateSetter('difficulty', 2);
  const hard = stateSetter('difficulty', 3);
  const veryHard = stateSetter('difficulty', 4);
  const arrays = stateSetter('category', 'Arrays');
  const binarySearchTrees = stateSetter('category', 'Binary Search Tree');
  const binaryTrees = stateSetter('category', 'Binary Tree');
  const dynamic= stateSetter('category', 'Dynamic Programming');
  const [catButton, setCatButton] = useState(true);
  const [diffButton, setDiffButton] = useState(false);
  const [progress, setProgress] = useState(null);
  const { user} = useUser();
  const [css1, setCss1] = useState(null);


  function stateSetter  (property, value) {
    const filteredExercise = [];
    for (let exercise of exercises) {
      if (exercise[property] === value) {
        filteredExercise.push(exercise);
      }
    }
    return filteredExercise;
  }

  const fetchUser = async() => {
    const res = await handleFetchUser();
    setUser1(res);
  }


  const handleFetchUser = () => {
    return fetch(`${url}/userex/${user.sub}`)
      .then(res => res.json())
      .then(data => data)
      .catch(e => e);
  }

  const progressFunc = () => {
    const solvedUser = user1.solved.length
    const exLength = exercises.length
    if(solvedUser === 0){
      setProgress(0)
    } else {
      let prog = Math.floor((solvedUser/ exLength) * 100)
      setProgress(prog)
    }
    setLoading(false);
  }


  const progCss = () => {
    setCss1(`.progress {
      width: 400px;
      height: 10px;
      border: 1px solid black;
      position: relative;
      border-radius: 3px;
    }
    .progress:after {
      content: '\';
      position: absolute;
      background: green;
      top: 0; bottom: 0;
      left: 0; 
      width: ${progress}%; 
    }`)
  }


  useEffect(() => {
    if(user?.sub) fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if(user1.solved) {
      return progressFunc()
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user1]);

  const categoryHandler = () => {
    setCatButton(true)
    setDiffButton(false)
  }

  const difficultyHandler = () => {
    setCatButton(false)
    setDiffButton(true)
  }

  useEffect(() => {
    progCss()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress])


  return(
  
    <div className={styles.container}>
      <NavBar/>
        <div className={styles.header} >
          <h1>{`Let's practice!`}</h1>
        </div>

      <div className={styles.dashboard}>

      <div className= {styles.completed}>
        <div className={styles.spinner}>
        {loading && user1.id  &&
        <Spinner background='rgba(36, 0, 150, 1)'/>}
        </div>
        {progress !== null && progress !== Infinity &&
        <>
          <h4> {progress}  % completed problems</h4>
          <div className="progress">
            <style> {css1}</style>
          </div>
        </>          
        }
      </div>

        <div className={styles.categorySelect}>
          <button onClick= {categoryHandler} className={ catButton === true ? styles.butTrue : styles.butFalse}>Filter by Category </button>
          <button onClick= {difficultyHandler} className={ diffButton === true ? styles.butTrue : styles.butFalse}>Filter by Difficulty</button>
        </div>

        <div className={styles.exerciseTabContainer}>
        <MainContext.Provider value={{user1}}>
      {diffButton === true &&         
      <>      
        <div className= {styles.exerciseTabs}>
          <h4> Easy </h4>
          <ExerciseList exercises = {easy}/> 
        </div>

        <div className={styles.exerciseTabs}>
        <h4> Medium </h4>
          <ExerciseList exercises = {medium}/> 
        </div>

        <div className={styles.exerciseTabs}>
        <h4> Hard </h4>
          <ExerciseList exercises = {hard}/> 
        </div>

        <div className={styles.exerciseTabs}>
        <h4> Very Hard </h4>
          <ExerciseList exercises = {veryHard}/> 
        </div>
        </>
          }


      {catButton === true && 
      <>
        <div className= {styles.exerciseTabs}>
          <h4> Arrays </h4>
          <ExerciseList exercises = {arrays}/> 
        </div>

        <div className={styles.exerciseTabs}>
        <h4> Binary Search Trees </h4>
          <ExerciseList exercises = {binarySearchTrees}/> 
        </div>

        <div className={styles.exerciseTabs}>
        <h4> Binary Trees </h4>
          <ExerciseList exercises = {binaryTrees}/> 
        </div>

        <div className={styles.exerciseTabs}>
        <h4> Dynamic Programming</h4>
          <ExerciseList exercises = {dynamic}/> 
        </div>        
        </>        
          }
          </MainContext.Provider>
        </div>
      </div>
    </div>
  )
}