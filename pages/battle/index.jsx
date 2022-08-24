// import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { html } from '@codemirror/lang-html';
import styles from './styles.module.css';
import { useState, useCallback, useEffect } from 'react';
import { NavBar } from '../../components/navBar';
import { url } from '../../config';
import dynamic from 'next/dynamic';
// import 'codemirror/theme/monokai.css';

const CodeMirror = dynamic(
  () => {
    import("@codemirror/lang-html")
    import('@uiw/codemirror-theme-dracula')
    return import("@uiw/react-codemirror")},
  { ssr: false }
);


export default function CSSBattle () {

  
  
  // useEffect(() => {
  //   if (window) {
  //     import("@uiw/react-codemirror").then((obj) => {
  //       if (!comp) {
  //         setComp(obj.default);
  //       }
  //     });
  //   }
  // }, []);

  const [score, setScore] = useState(0);
  const [match, setMatch] = useState(0);
  const [extension, setExtension] = useState();


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

  const fetchScore = () => {
    return fetch(`${url}/cssbattle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({code: codeString})})
      .then(res => res.json())
      .then(data => data)
      .catch(e => e);
  }

  const onChange = useCallback(value => {
    setCodeString(value)
  }, []);


  return(
    <div className={styles.fullContainer}>
      <NavBar/>
      
      <div className={styles.container} >
      
        <div className={styles.innerContainer}>
          
          <div className={styles.codeEditor}>
            <div className={styles.labelContainer}>
              <div className={styles.label}>Html</div>
            
            </div>
            
            {<CodeMirror
              value={codeString}
              height="200px"
              theme={dracula}
              extensions={[html()]}
              onChange={onChange}
              // options={{
              //   theme: 'monokai',
              // }}
              lazyLoadMode={false}
            />}         
         
          </div>

          <div style={{width:'43%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <div style={{width:'100%', height:'47%', display:'flex', flexDirection:'column'}}>
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

            <div style={{width:'100%', height:'47%', display:'flex', flexDirection:'column'}}>
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