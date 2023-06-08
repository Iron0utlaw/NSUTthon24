import React, { useState } from 'react'
import { ReactComponent as Thon } from '../../assets/Thon.svg'
import './reg.css'
import Myacc from '../acc/Myacc';
import Modal from '../Modal/Modal';
import AddData from '../modules/AddData'
import { tName, clear } from '../modules/RegMods';
import { openModal,closeModal } from '../modules/ModalMods';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';


const Reg = () => {
    const [team,setTeam] = useState(3);
    const members = [];
    for (let i = 0; i < team; i++) {
        members.push(<div>Team Member {i+1}</div>)
    }
    const [data,setData] = useState([
        {
            id: 0,
            name: '',
            email: '',
            rollno: '',
            branch: '',
            teamName: '',
            teamSize: 3,
            leader: true,
        },
        {
            id: 1,
            name: '',
            email: '',
            rollno: '',
            branch: '',
            leader: false,
        },
        {
            id: 2,
            name: '',
            email: '',
            rollno: '',
            branch: '',
            leader: false,
        },
        {
            id: 3,
            name: '',
            email: '',
            rollno: '',
            branch: '',
            leader: false,
        },
        {
            id: 4,
            name: '',
            email: '',
            rollno: '',
            branch: '',
            leader: false,
        },
    ])
    const [showModal, setShowModal] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault()
        clear(data,setData,team);
        console.log(JSON.parse(JSON.stringify(data)));
        AddData(data);
    }
    let i = 0;

    const variants = {
        enter: {
          transition: { staggerChildren: 1, delayChildren: 0 }
        },
        exit: {
          transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
      };

  return (
    <div className='reg-container'>
        <div className='side'>
        <Thon className='thon'/>
        </div>
        <form id='my-form' className='form' onSubmit={onSubmit}>
            <div className='size'>
                <h1>Team Size</h1>
                <div className='size-btn'>
                    <p className='team-size' onClick={() => setTeam(3)}>3</p>
                    <p className='team-size' onClick={() => setTeam(4)}>4</p>
                    <p className='team-size' onClick={() => setTeam(5)}>5</p>
                </div>
            </div>
            <div className='team-details'>
                <input className='team-name' required type='text' placeholder='Team Name' value={data[0].teamName} onChange={e => tName(e,0,data,setData)}></input>
                <AnimatePresence>
                <motion.dev
                               variants={variants}
                               initial="exit"
                               animate="enter"
                               exit="exit">
                {
                    members.map((curr) => {
                        return <Myacc key={i+1} name={curr.props.children[1]} data={data} setData={setData} id={i++}/>
                        
                    })
                }
                <button className='submit-form' type='button' onClick={() => openModal(data,setData,setShowModal,team)}>Submit</button>
                </motion.dev>
                </AnimatePresence>
            </div>
            {showModal && <Modal closeModal={() => closeModal(setShowModal)} data={data} team={team}/>}
        </form>
    </div>
  )
}

export default Reg