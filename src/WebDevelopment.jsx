import React from 'react'
import { Link } from 'react-router'

const WebDevelopment = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#007bff', fontSize: '2.5rem' }}>🌐 Web Development Services</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          We create stunning, high-performance websites and web applications that drive business growth.
        </p>
      </div>

      {/* Back to Services Link */}
      <div style={{ marginBottom: '30px' }}>
        <Link 
          to="/services" 
          style={{
            display: 'inline-block',
            padding: '8px 16px',
            backgroundColor: '#6c757d',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}
        >
          ← Back to Services
        </Link>
      </div>

      {/* Services Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        
        {/* Frontend Development */}
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '10px', 
          padding: '25px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#007bff', marginBottom: '15px' }}>🎨 Frontend Development</h3>
          <p>We build responsive and interactive user interfaces using modern frameworks and technologies.</p>
          <h4>Technologies:</h4>
          <ul>
            <li>React.js & React Native</li>
            <li>Vue.js</li>
            <li>Angular</li>
            <li>HTML5, CSS3, JavaScript</li>
            <li>TypeScript</li>
            <li>Tailwind CSS, Bootstrap</li>
          </ul>
        </div>

        {/* Backend Development */}
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '10px', 
          padding: '25px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#007bff', marginBottom: '15px' }}>⚙️ Backend Development</h3>
          <p>We develop robust server-side applications and APIs that power your web applications.</p>
          <h4>Technologies:</h4>
          <ul>
            <li>Node.js & Express.js</li>
            <li>Python (Django, Flask)</li>
            <li>PHP (Laravel, CodeIgniter)</li>
            <li>Java (Spring Boot)</li>
            <li>Databases (MySQL, MongoDB, PostgreSQL)</li>
            <li>RESTful APIs & GraphQL</li>
          </ul>
        </div>

        {/* E-commerce Solutions */}
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '10px', 
          padding: '25px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#007bff', marginBottom: '15px' }}>🛒 E-commerce Solutions</h3>
          <p>We create powerful online stores that help you sell products and services effectively.</p>
          <h4>Features:</h4>
          <ul>
            <li>Product Catalog Management</li>
            <li>Shopping Cart & Checkout</li>
            <li>Payment Gateway Integration</li>
            <li>Order Management System</li>
            <li>Inventory Management</li>
            <li>Customer Reviews & Ratings</li>
          </ul>
        </div>

      </div>




    </div>
  )
}

export default WebDevelopment 