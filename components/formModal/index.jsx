import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from './styles.module.css';
import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const initialForm = {
  username: '',
  title: '',
  explanation: '',
  code: ''
};

export function FormModal(props) {

  const {postSolution} = props;
  
  const [formState, setFormState] = useState(initialForm);

  const handleChange = (e) => {
    if (e.target) {
      const { value, name } = e.target;
      setFormState(prevState => ({...prevState, [name]: value}));
    } else {
      setFormState(prevState => ({...prevState, 'code': e}));
    }
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postSolution(formState);
    setFormState(initialForm)
  }


  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Share Your Solution
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className={styles.form}>
          <label style={{fontWeight:'bold', fontSize:'17px'}}>Username</label>
          <input required name='username' type='text' placeholder='Your username' value={formState.username} onChange={handleChange} className={styles.input}/>
          
          <label style={{fontWeight:'bold', fontSize:'17px'}}>Title</label>
          <input required name='title' type='text' placeholder='Your solution title' value={formState.title} onChange={handleChange}  className={styles.input}/>
          
          <label style={{fontWeight:'bold', fontSize:'17px'}}>Explanation</label>
          <input name='explanation' type='text' placeholder='Explain your code...' value={formState.explanation} onChange={handleChange} className={styles.input}/>
          
          <label style={{fontWeight:'bold', fontSize:'17px'}}>Code</label>
          <div style={{height:'30vh'}}>
            <CodeMirror
              value='//write your code here'
              height="200px"
              extensions={[javascript({ jsx: true })]}
              onChange={handleChange}
            />
          </div>
          

        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">Close</Button>
        <Button onClick={handleSubmit} type='submit'>Share</Button>
      </Modal.Footer>
    </Modal>
  );
}