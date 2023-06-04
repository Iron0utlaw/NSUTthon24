import React from 'react'
import './pre.css'

const Preview = ({person}) => {
    console.log(person.leader)
  return (
    <div className='card'>
        <h2>Name = {person.name}</h2>
        <h2>Branch = {person.branch}</h2>
        <h2>Roll No = {person.rollno}</h2>
        <h2>Email = {person.email}</h2>
        {person.leader && <h2>Leader</h2>}
    </div>
  )
}

export default Preview