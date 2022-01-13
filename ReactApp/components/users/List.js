import React from 'react'
import { FaPen,FaTrash,FaBeer} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { useState,useEffect } from 'react';
const List = () => {
    
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        getAllUsers();
    },[])
    async function getAllUsers(){
        try{
            const  users=await axios.get(" http://localhost:3333/students")
            setUsers(users.data)
            // console.log(users.data);
        }
        catch(error)
        {
            console.log("something is wrong");
        }
    }
    const handleDelete=async id=>{
        await axios.delete(`http://localhost:3333/students/${id}`);
        var newuser=users.filter((item)=>{
            return item.id !==id;
        })
        setUsers(newuser);
        
    }
    return (
        
        
        <>
        <table className="table border border-secondary table-striped mt-5">
        <thead>
        <tr>
        <th scope="col" className="bg-primary text-light" ></th>
        <th scope="col" className="bg-primary text-light"> User First Name</th>
        <th scope="col" className="bg-primary text-light"> User Email Id</th>
        
        <th scope="col" className=" bg-primary text-light ">Action</th>
        
        </tr>
        </thead>
        <tbody>
        {
            users.map((user,i)=>{
                return(
                    <>
                    <tr key={i}>
                    <th scope="row" >{i+1}</th>
                    <td>{user.stuname}</td>
                    <td>{user.email}</td>
                    
                    <td>
                    <Link to={`/view/${user.id}`}> <button type="button" className="btn btn-primary me-lg-1  ms-3 "> View</button></Link> 
                    <Link to={`/edit/${user.id}`}> <button type="button" className="btn btn-success me-lg-1 ms-1 "> <FaPen/> Update</button></Link> 
                    <button type="button" onClick={()=>handleDelete(user.id)} className="btn btn-danger "><FaTrash/>  Delete</button>
                    
                    </td>
                    </tr>
                    </>
                    )
                })
            }
            
            
            
            </tbody>
            </table>
            </>
            )
        }
        
        export default List
        