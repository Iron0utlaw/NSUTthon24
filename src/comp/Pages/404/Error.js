import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
        <h1 className='err-title'>Ayye yoo, Looking for something 👀 <br/>
        👉 <Link to='/' className='err-link'>Home</Link>
        </h1>
        <h1 className='err-title back'>404</h1>
    </div>
  )
}

export default Error