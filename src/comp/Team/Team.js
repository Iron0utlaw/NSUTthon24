import React, { useState } from 'react'
import './team.css'
import { motion } from 'framer-motion'

const Team = ({entry}) => {
  const [info, setInfo] = useState(false)

  return (
        info ? <div className='team-card-wrapper' onClick={() => setInfo(false)}>
          <h1 className='team-id'>{entry.id}</h1>
          <div className='team-card'>
            {entry.team.map((mem) => {
              return <h1 className='team-card-info'>{mem.name}</h1>
            })}
          </div>
        </div>
        :
        <motion.div 
        layout
        className='team-card-wrapper' onClick={() => setInfo(true)}>
          <h1 className='team-id'>{entry.id}</h1>
          <div className='team-card'>
            <h1 className='team-card-name'>{entry.team[0].teamName}</h1>
            <h1 className='team-score'>{entry.score}</h1>
          </div>
        </motion.div>
  )
}

export default Team