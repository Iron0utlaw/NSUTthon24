import React from 'react'
import './home.css'
import {ReactComponent as Thon} from '../../../assets/Thon.svg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='main-container'>
        <Thon className='main-logo'/>
        <div className='link-container'>
          <Link className='link' to="/teams">Teams</Link>
          <Link className='link' to="/registration">Register</Link>
          {/* <Link className='link' to="/soc-events">SocEvents</Link> */}
        </div>
    </div>
  )
}

export default Home