import React from 'react'
import './pre.css'

const Preview = ({person}) => {
  return (
    <div className='card'>
        <h2 className='pre-name'>{person.name}</h2>
        <div className='pre-info'>
          <h2 className='pre-info-header'>Roll Number</h2>
          <h2 className='pre-rollno'>{person.rollno}</h2>
          <h2 className='pre-info-header'>Branch</h2>
          <h2 className='pre-branch'>{person.branch}</h2>
          <h2 className='pre-info-header'>Email</h2>
          <h2 className='pre-email'>{person.email}</h2>
        </div>
        {/* {person.leader && <h2>Leader</h2>} */}
    </div>
  )
}

export default Preview