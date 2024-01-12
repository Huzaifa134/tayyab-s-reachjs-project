import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddUser() {
    const [userDetails, setUserDetails] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password2: '',
    });
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [isSuccessDisplayed, setIsSuccessDisplayed] = useState(false);
    const isMounted = useRef(true);

    useEffect(() => {
        // Cleanup function to set isMounted to false when the component is unmounted
        return () => {
            isMounted.current = false;
        };
    }, []);

    const handleInputChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddUser = async () => {
        try {
            setIsCreatingAccount(true);
            setIsLoading(true);

            const response = await axios.post('http://localhost:3331/addUser', userDetails);

            if (isMounted.current) {
                setSuccessMessage(response.data);
                setError(null);
                setIsSuccessDisplayed(true);

                // Delay the navigation by 2 seconds (adjust as needed)
                setTimeout(() => {
                    navigate('/getusers');
                }, 2000);
            }
        } catch (error) {
            console.error('Failed to add user', error);
            if (isMounted.current) {
                setError('Failed to add user');
            }
        } finally {
            if (isMounted.current) {
                setIsCreatingAccount(false);
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md">
            <label className="block mb-2">
                First Name:
                <input
                    type="text"
                    name="firstname"
                    value={userDetails.firstname}
                    onChange={handleInputChange}
                    className="block w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                />
            </label>
            <label className="block mb-2">
                Last Name:
                <input
                    type="text"
                    name="lastname"
                    value={userDetails.lastname}
                    onChange={handleInputChange}
                    className="block w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                />
            </label>
            <label className="block mb-2">
                Email:
                <input
                    type="text"
                    name="email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                    className="block w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                />
            </label>
            <label className="block mb-2">
                Password:
                <input
                    type="password"
                    name="password2"
                    value={userDetails.password2}
                    onChange={handleInputChange}
                    className="block w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                />
            </label>

            {isLoading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && (
                <p style={{ color: 'green' }}>
                    Result: {successMessage.result}, User ID: {successMessage.user_id}
                </p>
            )}

            <button
                onClick={handleAddUser}
                disabled={isLoading}
                className="bg-blue-500 flex mx-auto hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
                Add User
            </button>
        </div>
    );
}

export default AddUser;
