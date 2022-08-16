import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { html } from '@codemirror/lang-html';
import styles from './styles.module.css';
import { useState, useCallback } from 'react';
import { NavBar } from '../../components/navBar';

export default function CSSBattle () {

  const url = `https://cssbattle.dev/api/getScore?levelId=25&token=`;

  const [score, setScore] = useState(0);
  const [match, setMatch] = useState(0);

  const [codeString, setCodeString] = useState(`<div></div>
  <style>
    div {
      width: 100px;
      height: 100px;
      background: blueviolet;
    }
  </style>`);

  const findScore = async() => {
    const {score, match} = await fetchScore();
    setScore(score);
    setMatch(match);
  }
  console.log(JSON.stringify(codeString), 'CODE STRING')

  const fetchScore = () => {
    return fetch(url, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(codeString)})
      .then(res => res.json())
      .then(data => data)
      .catch(e => e);
  }

  const onChange = useCallback(value => {
    setCodeString(value)
  }, []);


  return(
    <div style={{display:'flex', flexDirection:'column', background:'#20045c'}}>
      <NavBar/>
      
      <div className={styles.container} >
      
        <div className={styles.innerContainer}>
          
          <div className={styles.codeEditor}>
            <div className={styles.labelContainer}>
              <div className={styles.label}>Html</div>
            
            </div>
            
            <CodeMirror
              value={codeString}
              height="200px"
              theme={dracula}
              extensions={[html()]}
              onChange={onChange}
            />            
         
          </div>

          <div style={{width:'43%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <div style={{width:'100%', height:'49%', display:'flex', flexDirection:'column'}}>
              <div className={styles.labelContainer}>
                <div className={styles.label}>Output</div>
                <button className={styles.submitButton} onClick={findScore}>Submit code</button>
              </div>
              <div className={styles.outputContainer}>
              <iframe srcDoc={codeString} style={{background:'white', width:'400px',height:'300px',border:'0',outline:'0' }}></iframe>
              <div className={styles.matchContainer}>
                <span>Match: {match}%</span>
                <span>Score: {score}</span>
              </div>
              </div>
            </div>

            <div style={{width:'100%', height:'49%', display:'flex', flexDirection:'column'}}>
              <div className={styles.labelContainer}>
                <div className={styles.label}>Target</div>
              </div>
              <div className={styles.outputContainer}>
                <iframe src="https://cssbattle.dev/targets/25.png" style={{background:'white', width:'400px',height:'300px',border:'0',outline:'0', }}></iframe>
              </div>
            </div>
            

          </div>
          
        </div>
        
      </div>
    </div>
    
    
  )
}