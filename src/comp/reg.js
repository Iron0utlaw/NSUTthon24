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

    // const formik = useFormik({
    //     initialValues: {
    //         name1: '',
    //         email1: '',
    //         branch1: '',
    //         rollno1: '',

    //         name2: '',
    //         email2: '',
    //         branch2: '',
    //         rollno2: '',

    //         name3: '',
    //         email3: '',
    //         branch3: '',
    //         rollno3: '',

    //         name4: '',
    //         email4: '',
    //         branch4: '',
    //         rollno4: '',

    //         name5: '',
    //         email5: '',
    //         branch5: '',
    //         rollno5: '',
    //     }
    // })

    // const [data,setData] = useState({
    //     name1: '',
    //     email1: '',
    //     branch1: '',
    //     rollno1: '',

    //     name2: '',
    //     email2: '',
    //     branch2: '',
    //     rollno2: '',

    //     name3: '',
    //     email3: '',
    //     branch3: '',
    //     rollno3: '',

    //     name4: '',
    //     email4: '',
    //     branch4: '',
    //     rollno4: '',
        
    //     name5: '',
    //     email5: '',
    //     branch5: '',
    //     rollno5: '',
    // })
    const [data,setData] = useState({
        name: [],
        branch: [],
        rollno: [],
        email: [],
    })

    const onSubmit = (e) =>{
        e.preventDefault()
    }

    const updateData = (fields) => {
        setData(prev =>{
            return {...prev, ...fields}
        })
    }
    let i = 1;

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
                    return <Myacc name={curr.props.children[1]} data={data} updateData={updateData} count={i++}/>
                })
            }
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Reg