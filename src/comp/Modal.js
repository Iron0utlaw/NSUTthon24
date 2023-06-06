import React from 'react'
import  ReactDOM from 'react-dom'
import './modal.css'
import Preview from './Preview'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
const Modal = ({closeModal, data ,team}) => {
  return ReactDOM.createPortal(
    <>
        <div className='modal-wrapper' onClick={closeModal}></div>
        <div className='modal-container'>
            <h1>{!data[0].teamName ? `Team Name`: data[0].teamName}</h1>
            <div className='team-pre'>
            {
                data.slice(0,team).map((person) => {
                    return <Preview key={person.id} person={person}/>
                })
            }
            </div>
            <button className='final-submit-btn' form='my-form' type='submit' onClick={closeModal}>
              <BsFillArrowRightCircleFill/>
            </button>
        </div>
    </>,document.querySelector(".ThonModal")
  )
}
 
export default Modal