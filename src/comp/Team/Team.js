import React from 'react'
import './team.css'

const Team = ({entry}) => {
  return (
        <div className='team-card-wrapper'>
          <h1 className='team-id'>{entry.id}</h1>
          <div className='team-card'>
            <h1 className='team-card-name'>{entry.team[0].teamName}</h1>
            <h1 className='team-score'>{entry.score}</h1>
          </div>
        </div>
  )
}

export default Team