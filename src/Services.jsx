import React from 'react'
import { Link } from 'react-router'

const Services = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Our Services</h1>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '40px' }}>
        
        {/* Web Development Service */}
        <div style={{ 
          border: '2px solid #007bff', 
          borderRadius: '10px', 
          padding: '20px', 
          width: '300px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#007bff' }}>🌐 Web Development</h2>
          <Link 
            to="/services/web-development" 
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              marginTop: '10px'
            }}
          >
            Learn More
          </Link>
        </div>

        {/* App Development Service */}
        <div style={{ 
          border: '2px solid #28a745', 
          borderRadius: '10px', 
          padding: '20px', 
          width: '300px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#28a745' }}>📱 App Development</h2>
          <Link 
            to="/services/app-development" 
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              marginTop: '10px'
            }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services 