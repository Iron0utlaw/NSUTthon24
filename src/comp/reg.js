import React, { useState } from 'react'
import { ReactComponent as Thon } from '../assets/Thon.svg'
import { useFormik } from 'formik';
import './reg.css'
import Myacc from './acc/Myacc';


const Reg = () => {
    const [team,setTeam] = useState(3);
    const members = [];
    for (let i = 0; i < team; i++) {
        members.push(<div>Harsh {i}</div>)
    }

    const formik = useFormik({
        initialValues: {
            name1: '',
            email1: '',
            branch1: '',
            rollno1: '',

            name2: '',
            email2: '',
            branch2: '',
            rollno2: '',

            name3: '',
            email3: '',
            branch3: '',
            rollno3: '',

            name4: '',
            email4: '',
            branch4: '',
            rollno4: '',

            name5: '',
            email5: '',
            branch5: '',
            rollno5: '',
        }
    })

  return (
    <div className='reg-container'>
        <div className='side'>
            <Thon className='thon'/>
        </div>
        <div className='form'>
            <h1>Team Size = {team}</h1>
            <button onClick={() => setTeam(3)}>3</button>
            <button onClick={() => setTeam(4)}>4</button>
            <button onClick={() => setTeam(5)}>5</button>
            {
                members.map((curr) => {
                    return <Myacc name={curr} formik={formik}/>
                })
            }
        </div>
    </div>
  )
}

export default Reg