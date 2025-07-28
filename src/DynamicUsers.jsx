import React from 'react'
import { Link } from 'react-router'

const DynamicUsers = () => {
    const userData = [
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com"
        },
        {
            id: 2,
            name: "Jane Doe",
            email: "jane@example.com"
        },
        {
            id: 3,
            name: "Bob Smith",
            email: "bob@example.com"
        },   
        
    ]
  return (
    <div>
        <h1>Dynamic Users</h1>
        {userData.map((data, index) => (    
            <div key={index}>
                <h2>{data.id}</h2>
                <h2>{data.name}</h2>
                <p>{data.email}</p>
                <h2><Link to={`/user-detail/${data.id}`} state={{ user: data }}>User Detail</Link></h2>
                <br />
            </div>
        ))}
    </div>
  )
}

export default DynamicUsers