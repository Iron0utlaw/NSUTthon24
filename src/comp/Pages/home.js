import React from 'react'
import './home.css'
import {ReactComponent as Thon} from '../../assets/Thon.svg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='main-container'>
        <Thon/>
        <div>
        <Link to="/r">Register</Link>
        <p></p>
        <Link to="/s">Teams</Link>
        </div>
    </div>
  )
}

export default Home