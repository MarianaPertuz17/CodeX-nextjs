import styles from './styles.module.css';
import { NavBar } from '../../components/navBar';
import { useState, useCallback, useEffect } from 'react';
import { ExerciseList } from '../../components/exerciseList';
import { useUser } from '@auth0/nextjs-auth0';

export default function Questions () {
  

  const [ exercises, setExercises ] = useState([]);
  const [ user1, setUser1 ] = useState([]);
  const [ easy, setEasy] = useState([])
  const [medium, setMedium] = useState([])
  const [hard, setHard] = useState([])
  const [veryHard, setVeryHard] = useState([])
  const [arrays, setArrays] = useState([])
  const [binarySearchTrees, setBinarySearchTrees] = useState([])
  const [binaryTrees, setBinaryTrees] = useState([])
  const [dynamic, setDynamic] = useState([])
  const [catButton, setCatButton] = useState(true)
  const [diffButton, setDiffButton] = useState(false)
  const [progress, setProgress] = useState(0)
  const { user} = useUser();



const url= 'http://localhost:3000/api/exercises'
const urlUser = 'http://localhost:3000/api/userex'


const fetchExercises = async() => {
  const res = await handleFetch();
   setExercises(res);
}

const handleFetch = () => {
  return fetch(`${url}`)
    .then(res => res.json())
    .then(data => data)
    .catch(e => e);
}

const fetchUser = async() => {
  const res = await handleFetchUser();
   setUser1(res);
}

const handleFetchUser = () => {
  return fetch(`${urlUser}/${user?.sub}`)
    .then(res => res.json())
    .then(data => data)
    .catch(e => e);
}

const progressFunc = () => {
  const solvedUser = 1
  const exLength = 2
  const prog = Math.floor((solvedUser/ exLength) * 100)
  setProgress(prog)
}



const filter = () => {
  for(let exercise of exercises){
    if(exercise.difficulty === 1 && easy.some(e => e.id === exercise.id) === false) setEasy(easy => [...easy, exercise])
    if(exercise.difficulty === 2 && medium.some(e => e.id === exercise.id) === false) setMedium(medium => [...medium, exercise])
    if(exercise.difficulty === 3 && hard.some(e => e.id === exercise.id) === false) setHard(hard => [...hard, exercise])
    if(exercise.difficulty === 4 && veryHard.some(e => e.id === exercise.id) === false) setVeryHard(veryHard => [...veryHard, exercise])
    if(exercise.category === 'Arrays' && arrays.some(e => e.id === exercise.id) === false) setArrays(arrays => [...arrays, exercise])
    if(exercise.category === 'Binary Search Tree' && binarySearchTrees.some(e => e.id === exercise.id) === false)
     setBinarySearchTrees(arrays => [...arrays, exercise])
    if(exercise.category === 'Binary Tree' && binaryTrees.some(e => e.id === exercise.id) === false) setBinaryTrees(arrays => [...arrays, exercise])
    if(exercise.category === 'Dynamic Programming' && dynamic.some(e => e.id === exercise.id) === false) setDynamic(arrays => [...arrays, exercise])
 }
}

useEffect(() => {
  if(user?.sub) fetchUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [user]);


useEffect(() => {
  fetchExercises();  
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [filter()]);

useEffect(() => {
  progressFunc() 
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [user]);


const categoryHandler = () => {
  setCatButton(true)
  setDiffButton(false)
}

const difficultyHandler = () => {
  setCatButton(false)
  setDiffButton(true)
}

const css = `.progress {
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
}`

  return(
  
    <div style={{display:'flex', flexDirection:'column', background:'#20045c'}}>
      <NavBar/>
        <div className={styles.header} >
          <h1> Lets Practice! </h1>
        </div>

      <div className={styles.dashboard}>
        <div className= {styles.completed}>
          <h1> {progress}  % completed problems</h1>
          <div className="progress">
            <style> {css}</style>
           </div>  
        </div>


        <div className={styles.categorySelect}>
          <button onClick= {categoryHandler} className={styles.butTrue}> Filter by Category </button>
          <button onClick= {difficultyHandler} className={styles.butTrue}> Filter by Difficulty</button>
        </div>

        <div className={styles.exerciseTabContainer}>

      {diffButton === true && 
      <> 
        <div className= {styles.exerciseTabs}>
          <h1> Easy </h1>
          <ExerciseList exercises = {easy}/> 
        </div>

        <div className={styles.exerciseTabs}>
        <h1> Medium </h1>
          <ExerciseList exercises = {medium}/> 
        </div>

        <div className={styles.exerciseTabs}>
        <h1> Hard </h1>
          <ExerciseList exercises = {hard}/> 
        </div>

        <div className={styles.exerciseTabs}>
        <h1> Very Hard </h1>
          <ExerciseList exercises = {veryHard}/> 
        </div>
        </>
          }


      {catButton === true && 
      <>
        <div className= {styles.exerciseTabs}>
          <h1> Arrays </h1>
          <ExerciseList exercises = {arrays}/> 
        </div>

        <div className={styles.exerciseTabs}>
        <h1> Binary Search Trees </h1>
          <ExerciseList exercises = {binarySearchTrees}/> 
        </div>

        <div className={styles.exerciseTabs}>
        <h1> Binary Trees </h1>
          <ExerciseList exercises = {binaryTrees}/> 
        </div>

        <div className={styles.exerciseTabs}>
        <h1> Dynamic Programming</h1>
          <ExerciseList exercises = {dynamic}/> 
        </div>
        </>
          }


        </div>
      </div>
    </div>
  )
}