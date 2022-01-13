import React from 'react'
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
const Edit = () => {
    
    const {id}=useParams();
    const history = useNavigate();
    // console.log(id);
    const[user,setUser]=useState({stuname:"",email:""});
    useEffect(()=>{
        async function getUsers(){
            try{
                const  user=await axios.get(`http://localhost:3333/students/${id}`)
                setUser(user.data);
                //  console.log(user.data);
            }
            catch(error)
            {
                console.log("something is wrong");
            }
        }
        getUsers();
    },[id])
    
    async  function onFormSubmit(e){
        e.preventDefault()
        try{
            await axios.put(`http://localhost:3333/students/${id}`,user)
            history('/');
        }
        catch(error)
        {
            console.log("something is wrong");
        }
    }
    
    
    function onTextChange(e){
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
        console.log(user);
    } 
    
    function handleSubmit(e) {
        e.preventDefault();
        
        history('/');
    }
    
    
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-info bg-info">
        <a className="ms-sm-5 navbar-brand text-dark" href="#">Frontend Task</a>
        
        <div className="ms-lg-auto ">
        <div className="navbar-nav" >
        <button type="button" className="btn btn-danger me-lg-4">Login</button>
        <button type="button" className="btn btn-danger me-lg-4 ">Logout</button>
        </div>
        </div> 
        </nav>
        
        
        <div className="container">
        <h3 className="text-md-center mt-3 text-dark "> Update Users Table</h3>
        
        <div class="row">
        <div class="col-lg-6 col-12 mt-4">
        
        <form>
        <div class="form-group">
        <label for="exampleInput">User Id</label>
        <input type="text"  value={id}  name="id" class="form-control" id="example" aria-describedby="emailHelp" placeholder="Enter email"/>
        
        </div>
        <div class="form-group">
        <label for="exampleInput">User Name</label>
        <input type="text" onChange={e=>onTextChange(e)}  value={user.stuname} name="stuname" class="form-control" id="example" aria-describedby="emailHelp" placeholder="Enter email"/>
        
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" onChange={e=>onTextChange(e)} value={user.email} name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        
        </div>
        
        <div className="text-center mt-2">
        <button type="submit" class="btn btn-primary" onClick={e=>onFormSubmit(e)}>Update</button>
        </div>
        <div className="text-center mt-2">
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Back to Home</button>
        </div>
        </form>
        </div>
        
        </div>
        
        
        
        </div> 
        </>
        )
    }
    
    export default Edit
    