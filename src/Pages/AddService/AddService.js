import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post("http://localhost:5000/services", data)
        .then(res=>{
            console.log(res);
            if(res.data.insertedId){
                alert("successfully inserted");
                reset();
            }
        })
    };
    return (
        <div className="add-service">
            <h1>Added Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name*" />
                <textarea  rows="8" {...register("description")} placeholder="Description*" />
                <input type="number" {...register("price")} placeholder="Price*" />
                <input {...register("img")} placeholder="Image-Url8" />
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default AddService;