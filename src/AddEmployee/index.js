import React, { useState } from "react";
import "./AddEmp.css"
 import axios from "axios";
import Swal from "sweetalert2";

const AddEmployee=()=>{

 const [ employeeDetails , setEmployeeDetails]=useState({
    name:"",
    email:"",
    Department:"",
    DateofBirth:"",
    mobileNumber:"",
    DateofJoining:"",
    ReportingPerson:"",
    Experience:"",
    salary:"",
    LinkedIn:"",
    GovernmentProof:"",

    })

const handleInput=(value)=>{
    // console.log(value)
    // return
    return setEmployeeDetails(employee=>{
        return{...employee,...value}
    })
}
const handleSubmit=async(e)=>{
e.preventDefault();

try{
    const response=await axios.post("https://pinfin-backend.onrender.com/employees",employeeDetails)
if (response){
    setEmployeeDetails({
        name:"",
        email:"",
        Department:"",
        DateofBirth:"",
        mobileNumber:"",
        DateofJoining:"",
        ReportingPerson:"",
        Experience:"",
        salary:"",
        LinkedIn:"",
        GovernmentProof:"",
      

    })
}
// Swal.fire({
//     title: "Do you want to save the changes?",
//     showDenyButton: true,
//     showCancelButton: true,
//     confirmButtonText: "Save",
//     denyButtonText: `Don't save`
//   }).then((result) => {
    
//     if (result.isConfirmed) {
//       Swal.fire("Saved!", "", "success");
//     } else if (result.isDenied) {
//       Swal.fire("Changes are not saved", "", "info");
//     }
//   });
}catch(error){

console.log('Error:',error)
}
}
    return(<div  className="Addemp">
    
<h1 className="addemp">ADD EMPLOYEE</h1>
<form className="form" onSubmit={handleSubmit}> 
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id='name' className="form-control" type='text' value={employeeDetails.name} onChange={e => handleInput({name: e.target.value}) } required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id='email' className="form-control" type='email' value={employeeDetails.email} onChange={e => handleInput({email: e.target.value})}required />
                </div>
                <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <input id='address' className="form-control" type='text' value={employeeDetails.Department} onChange={e => handleInput({Department: e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="Date of birth">Date of birth</label>
                    <input id='Date of birth' className="form-control" type='date' dateFormat="DD/MM/YYYY" value={employeeDetails.DateofBirth} onChange={e => handleInput({DateofBirth: e.target.value})}required />
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input id='mobileNumber' className="form-control" type='text' value={employeeDetails.mobileNumber} onChange={e => handleInput({mobileNumber: e.target.value})}required/>
                </div>
                <div className="form-group">
                    <label htmlFor="Date of joining">Date of joining</label>
                    <input id='Date of joining' className="form-control" type='date'  dateFormat="DD/MM/YYYY" value={employeeDetails.DateofJoining} onChange={e => handleInput({DateofJoining: e.target.value})}required/>
                </div>
                <div className="form-group">
                    <label htmlFor="Reporting person">Reporting person</label>
                    <input id='Reporting person' className="form-control" type='text' value={employeeDetails.ReportingPerson} onChange={e => handleInput({ReportingPerson: e.target.value})}required/>
                </div>
                <div className="form-group">
                    <label htmlFor="Experience">Experience In Month</label>
                    <input id='Experience' className="form-control" type='number' value={employeeDetails.Experience} onChange={e => handleInput({Experience: e.target.value})}required/>
                </div>
                <div className="form-group">
                    <label htmlFor="Salary">Salary</label>
                    <input id='Salary' className="form-control" type='text' value={employeeDetails.salary} onChange={e => handleInput({salary: e.target.value})}required/>
                </div>
                <div className="form-group">
                    <label htmlFor="bloodGroup">LinkedIn link</label>
                    <input id='LinkedIn link' className="form-control" type='link' value={employeeDetails.LinkedIn} onChange={e => handleInput({LinkedIn: e.target.value})}required/>
                </div>
                <div className="form-group">
                    <label htmlFor="myfile">Upload Any Government proof</label>
                    <input id='myfile' className="form-control" type='file' value={employeeDetails.GovernmentProof} onChange={e => handleInput({GovernmentProof: e.target.value})}required/>
                </div>
                <div className='form-group'>
                    <input className='btn btn-primary mt-2' type='submit' value='Add an Employee' />
                </div>
            </form>

    </div>)
}
export default AddEmployee
