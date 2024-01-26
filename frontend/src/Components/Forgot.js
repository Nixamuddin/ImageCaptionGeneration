import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Forgot = () => {
    const[email,setemail] =useState("")
    const handleEmail=async(e)=>{
        e.preventDefault();
        try{
const response= await axios.post('/api/v1/auth/forgot',{ email});
if(response.data){
    alert(" Resent password Email send Successfully ")

}
        }
        catch(error){
            console.log(error)
            alert(error)
        }
    }
  return (
  <>
  <div className="container d-flex flex-column">
  <div className="row align-items-center justify-content-center mt-5
    min-vh-80">
    <div className="col-12 col-md-8 col-lg-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="mb-4">
            <h5>Forgot Password?</h5>
            <p className="mb-2">Enter your registered email  to reset the password
            </p>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-control" value={email} onChange={(e)=>setemail(e.target.value)} name="email" placeholder="Enter Your Email" required />
            </div>
            <div className="mb-3 d-grid">
              <button type="submit" className="btn btn-info" onClick={handleEmail}>
                Reset Password
              </button>
            </div>
            <span>Don't have an account? <Link to="/register">Register</Link></span>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default Forgot