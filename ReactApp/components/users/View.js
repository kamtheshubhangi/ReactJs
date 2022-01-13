import React from 'react'
import {useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

import axios from 'axios'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const View = () => {
    const {id}=useParams();
    // console.log(id);
    const [user, setuser] = useState([]);
    
    const history = useNavigate();
    useEffect(()=>{
        async function getUsers(){
            try{
                const  user=await axios.get(`http://localhost:3333/students/${id}`)
                setuser(user.data);
                //  console.log(user.data);
            }
            catch(error)
            {
                console.log("something is wrong");
            }
        }
        getUsers();
    },[id])
    
    
    function handleSubmit(e) {
        e.preventDefault();
        
        history('/');
    }
    
    return (
        <>
        
        <table className="table border border-secondary table-striped mt-5">
        <thead>
        <tr>
        <th scope="col"></th>
        <th scope="col"> User First Name</th>
        <th scope="col"> User Last Name</th>
        
        
        </tr>
        </thead>
        <tbody>
        <tr>
        <th scope="row">{user.id}</th>
        <td>{user.stuname}</td>
        <td>{user.email}</td>
        
        
        </tr>
        
        </tbody>
        </table>
        <div className="text-center mt-2">
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Back to Home</button>
        </div>
        </>
        )
    }
    
    export default View
    
    