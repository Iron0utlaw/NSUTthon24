import React, { useState } from 'react'

const Myacc = ({name}) => {
    const [toggle, setToggle] = useState(false)
  return (
    <div>
        <button onClick={() => setToggle(!toggle)}>➕</button>
        <input type='text' placeholder={`Harsh ${name}`}></input>
        {toggle &&
            <div>
                <input type='text' placeholder="Email"></input>
                <input type='text' placeholder="Branch"></input>
                <input type='text' placeholder="Roll No"></input>
            </div>
        }

    </div>
  )
}

export default Myacc