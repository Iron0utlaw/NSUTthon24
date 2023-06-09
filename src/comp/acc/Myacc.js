import React, { useRef, useState } from 'react'
import Select from 'react-select';
import { LeaderToggle, emailHandler, nameHandler, rollnoHandler, branchHandler} from '../modules/AccMods';
import { options } from '../modules/BranchData';
import './myacc.css'
import { AnimatePresence, easeIn, easeOut, motion } from 'framer-motion';

const Myacc = ({name, data, setData, id}) => {
    const [toggle, setToggle] = useState(false)
    const ref = useRef(null);
    const scroller = () => {
      setToggle(!toggle)
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: "center",
        inline: "center",
      });
    };    

    const variants = {
      enter: {
        opacity: 1,
        x: 0,
        transition: { staggerChildren: 0.5, delayChildren: 1 }
      },
      exit: {
        opacity: 0,
        x: 100,
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
      }
    };
  return (
    <motion.div
    layout
    variants={variants}
    ref={ref} className='acc-container'>
        <motion.div layout='position' className='top-fields'>
          <button className={'toggler ' + (toggle ? 'toggle-active' : '')} type='button' onClick={scroller}>+</button>
          <input className='name-input' required name="name" type='text' placeholder={`Team Member ${name}`} value={data[id].name} onChange={e => {nameHandler(e,id,data,setData); setToggle(true)}} onFocusCapture={()=> setToggle(true)}></input>
          <p className={'lead-btn' + (data[id].leader ? ' active' : ' not-active')} onClick={() => LeaderToggle(id,data,setData)}>Leader</p>
        </motion.div>
        <AnimatePresence>
        {toggle &&
              <motion.div
                initial={{ opacity: 0}}
                animate={{opacity: 1}}
                exit={{ opacity: 0}}
                className='acc-toggle'>
                <input required type='text' name="email" placeholder="Email" value={data[id].email} onChange={e => emailHandler(e,id,data,setData)}></input>
                <Select required className='drop' placeholder="Branch" options={options} onChange={value => branchHandler(value,id,data,setData)}/>
                <input required type='text' name="rollno" placeholder="Roll No" value={data[id].rollno} onChange={e => rollnoHandler(e,id,data,setData)}></input>
            </motion.div>
        }
        </AnimatePresence>
    </motion.div>
  )
}

export default Myacc