import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { getallDetailAPI } from '../../services/allAPI';
function Details() {
  const [alldetails,setAlldetails]=useState("")
  const navigarte=useNavigate()
  const getallDeatils=async()=>{
    try{
  const result=await getallDetailAPI()
  if(result.status===200){
    setAlldetails(result.data)
  }
    }catch(err){
 console.log(err);
    }
  }
  const handleBack=()=>{
   navigarte('/')
  }
  useEffect(()=>{
 getallDeatils()
  },[])
  return (
    <div className='p-2' style={{marginTop:'100px'}}>
    <div>
    <h1 className='text-center pp'>Student Details</h1>
    </div>
    <div className="mt-4">
      <div className="d-flex justify-content-between mt-5">
        <Table striped bordered hover className='ms-2'>
    <thead>
      <tr>
        
        <th>First Name</th>
        <th>Last Name</th>
        <th>Address</th>
        <th>E-mail</th>
        <th>Mobile</th>
        <th>DOB</th>
        <th>Gender</th>
        <th>Course</th>
      </tr>
    </thead>
    {alldetails.length>0 && alldetails.map((details,index)=>(
    <tbody  details={details}>
  
      <tr key={index}>
       
      <td>{details?.firstname}</td>
      <td>{details?.lastname}</td>
      <td>{details?.address}</td>
<td>{details?.email}</td>
<td>{details?.mobile}</td>
<td>{details?.dob}</td>
<td>{details?.gender}</td>
<td>{details?.course}</td>
    </tr>
     
   
    </tbody> )) }
  </Table>
  </div>
 <div> <button onClick={handleBack} className='btn btn-info mt-3 ms-3'>Back</button></div>
  </div>
  </div>
  )
}

export default Details