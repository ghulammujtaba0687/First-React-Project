import React from 'react'
import './index.css'
import { Link } from 'react-router'
const NotFound = () => {
  return (
    <div className='not-found'>
        <h1>404</h1>
        <p>Page not found</p>
        <p>The page you are looking for does not exist.</p>
        <button className='not-found-btn'><Link to="/" className='not-found-btn-link'>Go to Home</Link></button>
    </div>
  )
}   

export default NotFound