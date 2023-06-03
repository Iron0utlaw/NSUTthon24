import React from 'react'
import './home.css'
import {ReactComponent as Thon} from '../assets/Thon.svg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='main-container'>
        <Thon/>
        <Link to="/r">Next</Link>
    </div>
  )
}

export default Home