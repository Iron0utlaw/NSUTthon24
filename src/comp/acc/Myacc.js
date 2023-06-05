import React, { useState } from 'react'
import './myacc.css'
import Select from 'react-select';

const Myacc = ({name, data, setData, id}) => {
    const [toggle, setToggle] = useState(false)
    const LeaderToggle = (id) =>{
      var result = data;
      result = result.map((x) => {
        if(x.id === id){
          x.leader = true;
          return x;
        }else{
          x.leader = false;
          return x;
        }
      })
      setData(result);
    }
    const emailHandler = (e, id) => {
      var result = data;
      result = result.map((x) => {
        if (x.id === id) {
          x.email = e.target.value;
          return x;
        } else return x;
      });
      setData(result);
    };
    const nameHandler = (e, id) => {
      var result = data;
      result = result.map((x) => {
        if (x.id === id) {
          x.name = e.target.value;
          return x;
        } else return x;
      });
      setData(result);
    };
    const rollnoHandler = (e, id) => {
      var result = data;
      result = result.map((x) => {
        if (x.id === id) {
          x.rollno = e.target.value;
          return x;
        } else return x;
      });
      setData(result);
    };
    const newBranchHandler = (value,id) => {
      var result = data;
      result = result.map((x) => {
        if (x.id === id) {
          x.branch = value.value;
          return x;
        } else return x;
      });
      setData(result);
    };

    const options = [
      {
        label: "Main Campus",
        options: [
          { label: "CSE", value: "CSE" },
          { label: "CSDS", value: "CSDS" },
          { label: "CSAI", value: "CSAI" },
          { label: "IT", value: "IT" },
          { label: "ITNS", value: "ITNS" },
          { label: "MAC", value: "MAC" },
          { label: "ECE", value: "ECE" },
          { label: "EIOT", value: "EIOT" },
          { label: "EE", value: "EE" },
          { label: "ICE", value: "ICE" },
          { label: "ME", value: "ME" },
          { label: "BT", value: "BT" },
          { label: "B.Design", value: "B.Design" },
          { label: "B.FTech", value: "B.FTech" },
        ]
      },
      {
        label: "East Campus",
        options: [
          { label: "CSDA", value: "CSDA" },
          { label: "CIOT", value: "CIOT" },
          { label: "ECAM", value: "ECAM" },

        ]
      },
      {
        label: "West Campus",
        options: [
          { label: "MEEV", value: "MEEV" },
          { label: "CE", value: "CE" },
          { label: "GI", value: "GI" },
          { label: "B.Arch", value: "B.Arch" },
        ]
      },
    ];

  return (
    <div className='acc-container'>
        <button type='button' onClick={() => setToggle(!toggle)}>➕</button>
        <input required name="name" type='text' placeholder={`Team Member ${name}`} value={data[id].name} onChange={e => {nameHandler(e,id); setToggle(true)}} onFocusCapture={()=> setToggle(true)}></input>
        <p className={'lead-btn' + (data[id].leader ? ' active' : ' not-active')} onClick={() => LeaderToggle(id)}>Leader</p>
        {toggle &&
            <div className='acc-toggle'>
                <input required type='text' name="email" placeholder="Email" value={data[id].email} onChange={e => emailHandler(e,id)}></input>
                <Select required className='drop' options={options} onChange={value => newBranchHandler(value,id)}/>
                <input required type='text' name="rollno" placeholder="Roll No" value={data[id].rollno} onChange={e => rollnoHandler(e,id)}></input>
            </div>
        }
    </div>
  )
}

export default Myacc