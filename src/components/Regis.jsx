import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { registerAPI } from '../../services/allAPI';

function Regis() {
  const [studentInputdata,setStudentInputdata]=useState({
    firstname:"",lastname:"",address:"",email:"",gender:"",mobile:"",password:"",dob:"",course:""
  })
  console.log(studentInputdata);
    const navigate=useNavigate()
    const handleRegister=async(e)=>{
      e.preventDefault()
         console.log(studentInputdata);
      const {firstname,lastname,address,email,gender,mobile,password,dob,course}=studentInputdata
      if(!firstname||!lastname||!address||!email||!gender||!mobile||!password||!dob||!course){
        toast.info("Please fill the form completely")
      }else{
        //toast.success("proceed to register api")
       try{
     const result=await registerAPI(studentInputdata)
     console.log(result);
     if(result.status===200){
      toast.success(`Welcome ${result.data.firstname}...`)
      setStudentInputdata({ firstname:"",lastname:"",address:"",email:"",gender:"",mobile:"",password:"",dob:"",course:""})
      //navigate to login
      setTimeout(()=>{
        navigate("/stddetail")
      },2000)
     }else{
      toast.error(result.response.data)
     }
       }catch(err){
        console.log(err);
       }
      }

  }
  const handleCancel = () => {
    setStudentInputdata({ firstname:"", lastname:"", address:"", email:"", gender:"", mobile:"", password:"", dob:"", course:""});
  }
    
  return (
    <div className='text-center ff justify-content-center align-items-center' style={{}}>
 <h1 className='fw-bolder text-dark pp'>
           Apply as a Student
          </h1> 
         <div className="row">
         <Form className='d-flex justify-content-between mt-5'>
            <div className="col-lg-6">
         
          
          
            <Form.Group className="mb-3 ms-4" controlId="formBasicName">
         
         <Form.Control type="text" placeholder="First Name" value={studentInputdata.firstname} onChange={e=>setStudentInputdata({...studentInputdata,firstname:e.target.value})} required/>
       </Form.Group>

       <Form.Group className="mb-3 ms-4" controlId="formLastName">
        
         <Form.Control type="text" placeholder="Last Name" value={studentInputdata.lastname} onChange={e=>setStudentInputdata({...studentInputdata,lastname:e.target.value})} required/>
       </Form.Group>
       <Form.Group className="mb-3 ms-4" controlId="formAddress">
        
         <Form.Control type="text"  as="textarea" rows={3} placeholder="Address" value={studentInputdata.address} onChange={e=>setStudentInputdata({...studentInputdata,address:e.target.value})} required/>
       </Form.Group>
           
     <Form.Group className="mb-3 ms-4" controlId="formBasicEmail">
     
       <Form.Control type="email" placeholder="Enter email" value={studentInputdata.email} onChange={e=>setStudentInputdata({...studentInputdata,email:e.target.value})} required />
       
     </Form.Group>
     

     <Form.Group className="mb-3 ms-4" controlId="formGender">
            
              <Form.Select aria-label="Select Gender" value={studentInputdata.gender} onChange={e=>setStudentInputdata({...studentInputdata,gender:e.target.value})} required>
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              
              </Form.Select>
            </Form.Group>
            </div>


            <div className="col-lg-6">
   
            <Form.Group className="mb-3 ms-4" controlId="formmobile">
         
         <Form.Control type="tel" placeholder="Mobile" value={studentInputdata.mobile} onChange={e=>setStudentInputdata({...studentInputdata,mobile:e.target.value})} required/>
       </Form.Group>
    
      <Form.Group className="mb-3 ms-4" controlId="formBasicPaswd">

        <Form.Control type="password" placeholder="Enter Password" value={studentInputdata.password} onChange={e=>setStudentInputdata({...studentInputdata,password:e.target.value})} required />
      </Form.Group>
      <Form.Group className="mb-3 ms-4" controlId="formdate">
         
         <Form.Control type="date" placeholder="Date of Birth" value={studentInputdata.dob} onChange={e=>setStudentInputdata({...studentInputdata,dob:e.target.value})} required/>
       </Form.Group>
     
       <Form.Group className="mb-3 ms-4" controlId="formCourse">
            
            <Form.Select aria-label="Select the Course" value={studentInputdata.course} onChange={e=>setStudentInputdata({...studentInputdata,course:e.target.value})} required>
            <option>Select Course</option>
              <option value="Biology">Biology</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Humanities">Humanities</option>
            
            </Form.Select>
          </Form.Group>
       <Button onClick={handleRegister} variant="outline-info" className='text-black'>Register</Button>
       <Button onClick={handleCancel} variant="outline-secondary" className='ms-4 text-dark'>Cancel</Button>
            </div>
       
       
            </Form>
         </div>
         <ToastContainer autoClose={3000} theme='colored'/> 
        </div>
    
  )
}

export default Regis