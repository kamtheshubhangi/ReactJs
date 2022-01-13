import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import List from "../users/List";
import axios from 'axios';
import { useState } from 'react';
const Home = () => {
    const[user,setUser]=useState({stuname:"",email:""});
    const[status,setStatus]=useState();
    
    function onTextChange(e){
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
        console.log(user);
    }  
    async  function onFormSubmit(e){
        e.preventDefault()
        try{
            await axios.post(`http://localhost:3333/students`,user)
            setStatus(true);
        }
        catch(error)
        {
            console.log("something is wrong");
        }
    }
    if(status)
    {
        return<Home />
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-info bg-dark">
        <a className="ms-sm-5 display-4 navbar-brand text-light" href="#">Frontend Task</a>
        
        <div className="ms-lg-auto ">
        <div className="navbar-nav" >
        <button type="button" className="btn btn-danger me-lg-4">Login</button>
        <button type="button" className="btn btn-danger me-lg-4 ">Logout</button>
        </div>
        </div> 
        </nav>
        
        
        <div className="container">
        <h3 className="text-md-center mt-3 text-light bg-success p-3 ">Users Table</h3>
        
        <div class="row">
        <div class="col-lg-6 col-12 mt-4">
        <h4 className="text-md-center mt-4 text-dark bg-warning p-2 ">Create Users</h4>
        
        <div class="form-group">
        <label for="exampleInput">User Name</label>
        <input type="text" name="stuname" onChange={e=>onTextChange(e)} class="form-control" id="example" aria-describedby="emailHelp" placeholder="Enter email"/>
        
        </div>
        <div class="form-group mt-2">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" name="email" onChange={e=>onTextChange(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        
        </div>
        
        <div className="text-center mt-3">
        <button type="submit" onClick={e=>onFormSubmit(e)} class="btn btn-primary">Add User</button>
        </div>
        
        </div>
        <div className="col-lg-6 col-12">
        
        <List />
        
        </div>
        </div>
        
        
        </div> 
        </>
        )
    }
    
    export default Home;
    