import React from 'react'
import  ReactDOM from 'react-dom'
import './modal.css'
import Preview from './Preview'
const Modal = ({closeModal, data ,team}) => {
  return ReactDOM.createPortal(
    <>
        <div className='modal-wrapper' onClick={closeModal}></div>
        <div className='modal-container'>
            <h1>{data[0].teamName}</h1>
            {
                data.slice(0,team).map((person) => {
                    return <Preview key={person.id} person={person}/>
                })
            }
            <button onClick={closeModal}>Close</button>
        </div>
    </>,document.querySelector(".ThonModal")
  )
}
 
export default Modal