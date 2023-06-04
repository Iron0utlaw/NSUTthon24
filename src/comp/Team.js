import React from 'react'
import './team.css'

const Team = ({entry}) => {
  return (
    <div className='team-card'>
        <h1>{entry.id}</h1>
        <h1>{entry.team[0].teamName}</h1>
    </div>
  )
}

export default Team