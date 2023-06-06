import React, { useState } from 'react'
import { ReactComponent as Thon } from '../assets/Thon.svg'
import './reg.css'
import Myacc from './acc/Myacc';
import Modal from './Modal';
import AddData from './modules/AddData'


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

    const clear = () => {
        var result = data;
        result = result.map((x) => {
            if (x.id >= team) {
                data[x.id] = {
                    id: x.id,
                    name: '',
                    email: '',
                    rollno: '',
                    branch: '',
                    leader: false,
                }
                return x;
          } else return x;
        });
        setData(result);
    };
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        clear();
        setShowModal(true);
    }
    const closeModal = async () => {
        await delay(1000);
        setShowModal(false);
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        clear()
        console.log(JSON.parse(JSON.stringify(data)));
        AddData(data);
        // axios.post('https://sheet.best/api/sheets/c6360c63-1264-4f4b-b39c-a7d2e204e8e6', data)
        // .then(response => {
        //     console.log(response);
        // })
    }
    let i = 0;
    const tName = (e, id) => {
        var result = data;
        result = result.map((x) => {
          if (x.id === id) {
            x.teamName = e.target.value;
            return x;
          } else return x;
        });
        setData(result);
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
                <input className='team-name' required type='text' placeholder='Team Name' value={data[0].teamName} onChange={e => tName(e,0)}></input>
                {
                    members.map((curr) => {
                        return <Myacc key={i+1} name={curr.props.children[1]} data={data} setData={setData} id={i++}/>
                    })
                }
                <button className='submit-form' type='button' onClick={openModal}>Submit</button>
            </div>
            {showModal && <Modal closeModal={closeModal} data={data} team={team}/>}
        </form>
    </div>
  )
}

export default Reg