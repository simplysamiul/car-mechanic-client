import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:3000/booking/${serviceId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;