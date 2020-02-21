import {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const modalRoot = document.getElementById('modal-root');

const Modal = ({children}) => {
  const div = document.createElement('div');

  useEffect(() => {
    //componentDidMount block
    modalRoot.appendChild(div);
    return () => {
      //componentWillUnmount block
      modalRoot.removeChild(div);
    }
  }, []);//2nd arguement: [] or do not watch for changes


  return ReactDOM.createPortal(children, div);
};

export default Modal;
