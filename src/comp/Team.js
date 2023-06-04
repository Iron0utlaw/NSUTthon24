import React from 'react'

const Team = ({entry}) => {
  return (
    <div>
        <h1>{entry.team[0].name}</h1>
    </div>
  )
}

export default Team