import React, { useState } from 'react'
import { ReactComponent as Thon } from '../assets/Thon.svg'
import './reg.css'
import Myacc from './acc/Myacc';


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
        },
        {
            id: 1,
            name: '',
            email: '',
            rollno: '',
            branch: '',
        },
        {
            id: 2,
            name: '',
            email: '',
            rollno: '',
            branch: '',
        },
        {
            id: 3,
            name: '',
            email: '',
            rollno: '',
            branch: '',
        },
        {
            id: 4,
            name: '',
            email: '',
            rollno: '',
            branch: '',
        },
    ])

    const onSubmit = (e) =>{
        e.preventDefault()
        console.log(data);
    }
    let i = 0;

  return (
    <div className='reg-container'>
        <div className='side'>
            <Thon className='thon'/>
            
        </div>
        <form className='form' onSubmit={onSubmit}>
            <h1>Team Size = {team}</h1>
            <button onClick={() => setTeam(3)}>3</button>
            <button onClick={() => setTeam(4)}>4</button>
            <button onClick={() => setTeam(5)}>5</button>
            {
                members.map((curr) => {
                    return <Myacc name={curr.props.children[1]} data={data} setData={setData} id={i++}/>
                })
            }
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Reg