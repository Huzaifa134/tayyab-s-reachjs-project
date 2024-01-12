import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetContacts = () => {
    const [contacts, setContacts] = useState([]);

    const getContacts = async () => {
        try {
            const response = await axios.get('https://comweb-backend.onrender.com/getContacts', {
                params: {
                    // If there are any query parameters to send, add them here
                    userid: '2', // Adjust the userid as needed
                },
            });

            setContacts(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Failed to make the request', error);
        }
    };

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <div>
            {JSON.stringify(contacts, null, 2)}
        </div>
    );
};

export default GetContacts;
