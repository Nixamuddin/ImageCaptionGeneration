import React,{useState} from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../Auth/Auth';
const Login = () => {
  const[auth,setAuth]=useAuth();
  const usenavigate=useNavigate();
  const [formData,setformData] =useState({
    email:"",
    password:"",
  })
  const handleform=(e)=>{
    const {name,value} = e.target;
    setformData({...formData,[name]:value});
  }
  const handlesubmit=async (e) => {
e.preventDefault();
try{
  const response=await axios.post('http://localhost:8080/api/v1/auth/login',formData);
  if(response&& response.data.success) {
setAuth({...auth, user: response.data.user,
token: response.data.token})
localStorage.getItem('auth', JSON.stringify(response.data))
  usenavigate('/diaryhome')
  }

  setformData({email:" ",password:" "})
}
catch(error){
  console.log(error)
}

  }
  return (
    <>
    <div className="register-container">
      <div className="container">
        <div className="row offset=1">
          <div className="col-md-5">
            <h3 className="text-center titles">LogIn To Account</h3>
            <h6>Get started with your account</h6>
           <form className='register-form' onSubmit={handlesubmit}>
  <div className="mb-3">
    <input type="email" className="form-control"  placeholder='Enter Your Email' name='email'  value={formData.email} onChange={handleform}  />
  </div>
  <div className="mb-3">
    <input type="password" className="form-control"  placeholder='Enter Your Password' name='password'  value={formData.password} onChange={handleform}  />
  </div>
  <p className='justify-content-end'><Link to="/forgot">Forgot Password </Link></p>
  <button type="submit" className="btn btn-primary register-btn">Log In</button>
  <p> Have no Account ? <Link to='/register'>Please Create a new account</Link></p>
</form>

          </div>
          <div className="col-md-5">
            <img src="login.png" alt="" className='login-mage' />
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Login;