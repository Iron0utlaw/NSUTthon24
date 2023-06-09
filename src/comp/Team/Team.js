import React from 'react'
import './team.css'
import { motion } from 'framer-motion'

const Team = ({entry}) => {

  return (
        <motion.div 
        layout
        className='team-card-wrapper'>
          <h1 className='team-id'>{entry.id}</h1>
          <div className='team-card'>
            <h1 className='team-card-name'>{entry.team[0].teamName}</h1>
            <h1 className='team-score'>{entry.score}</h1>
          </div>
        </motion.div>
  )
}

export default Team