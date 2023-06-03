import React, { useState } from 'react'
import './myacc.css'

const Myacc = ({name, data, updateData, count}) => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className='acc-container'>
        <button onClick={() => setToggle(!toggle)}>➕</button>
        <input required type='text' placeholder={`Team Member ${name}`}></input>
        {toggle &&
            <div className='acc-toggle'>
                <input required type='text' placeholder="Email" value={data.email} onChange={e => updateData({email: e.target.value})}></input>
                <input required type='text' placeholder="Branch"></input>
                <input required type='text' placeholder="Roll No"></input>
            </div>
        }

    </div>
  )
}

export default Myacc