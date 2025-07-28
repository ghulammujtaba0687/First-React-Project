import React from 'react'
import { useParams, useLocation } from 'react-router'

const UserDetail = () => {
    const { id } = useParams()
    const location = useLocation()
    
    // Get user data from location state (if passed from Link)
    const userFromState = location.state?.user
    
    // If no user data in state, you can define it here or fetch from API
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
    
    // Find user by ID
    const user = userFromState || userData.find(user => user.id === parseInt(id))
    
    if (!user) {
        return <div><h1>User not found!</h1></div>
    }
    
    console.log("User data:", user)
    
    return (
        <div>
            <h1>User Detail</h1>
            <h2>User ID: {user.id}</h2>
            <h2>User Name: {user.name}</h2>
            <h2>User Email: {user.email}</h2>
        </div>
    )
}

export default UserDetail   