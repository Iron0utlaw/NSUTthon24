import React, { useState } from 'react'
import './myacc.css'

const Myacc = ({name, data, setData, id}) => {
    const [toggle, setToggle] = useState(false)
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
    const branchHandler = (e, id) => {
      var result = data;
      result = result.map((x) => {
        if (x.id === id) {
          x.branch = e.target.value;
          return x;
        } else return x;
      });
      setData(result);
    };
  return (
    <div className='acc-container'>
        <button onClick={() => setToggle(!toggle)}>➕</button>
        <input required type='text' placeholder={`Team Member ${name}`} value={data[id].name} onChange={e => nameHandler(e,id)}></input>
        {toggle &&
            <div className='acc-toggle'>
                <input required type='text' placeholder="Email" value={data[id].email} onChange={e => emailHandler(e,id)}></input>
                <input required type='text' placeholder="Branch" value={data[id].branch} onChange={e => branchHandler(e,id)}></input>
                <input required type='text' placeholder="Roll No" value={data[id].rollno} onChange={e => rollnoHandler(e,id)}></input>
            </div>
        }

    </div>
  )
}

export default Myacc