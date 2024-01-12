import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetOrders = () => {
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        try {
            const response = await axios.post('https://comweb-backend.onrender.com/getOrders', {
            });

            setOrders(response.data);
        } catch (error) {
            console.error('Failed to make the request', error);
        }
    };

    useEffect(() => {
        getOrders();
    }, []);
    return (
        <div>
            {JSON.stringify(orders, null, 2)}
        </div>
    )
}

export default GetOrders