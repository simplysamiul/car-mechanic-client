import React, { useEffect, useState } from 'react';
const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);
    const handelDeleteButton = id =>{
        const url = `http://localhost:5000/services/${id}`
        fetch(url,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
           if(data.deletedCount){
            console.log(data);
            alert("Successfully deleted!")
            const remainingServices = services.filter(service => service._id !== id);
            setServices(remainingServices);
           }
        })
    }
    return (
        <div>
            <h1>this is manage users</h1>
            {
                services.map(service => <div key={service._id}>
                    {service.name} <br />
                    <button onClick={()=>handelDeleteButton(service._id)}>Delete</button><br />
                </div>)
            }
        </div>
    );
};

export default ManageServices;