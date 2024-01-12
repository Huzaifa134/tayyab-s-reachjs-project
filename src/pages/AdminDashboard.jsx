import React from 'react'
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
    const navigate = useNavigate();

    const [auth] = useAuth()
    return (
        <>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <div >

                <div>
                    <div>
                        <h3>Name: {auth?.user?.name}</h3>
                        <h3>Email: {auth?.user?.email}</h3>
                        <h3>Address: {auth?.user?.address}</h3>
                        <h3>Role: {auth?.user?.role === 1 ? "Admin" : "User"}</h3>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AdminDashboard