import React from 'react'
import './team.css'
import { motion } from 'framer-motion'

const Team = ({entry}) => {
  const variants = {
    enter: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.5, delayChildren: 1 }
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  return (
        <motion.div 
        variants={variants}
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