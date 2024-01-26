import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const usenavigate=useNavigate();
  const [formData,setformData] =useState({
    username:"",
    email:"",
    password:"",
  })
  const[message,setmessage] = useState(" ")
  const handleform=(e)=>{
    const {name,value} = e.target;
    setformData({...formData,[name]:value});
  }
  const handlesubmit=async (e) => {
    try{
      e.preventDefault();
      const respose = await axios.post('/api/v1/auth/register',formData);
      if(respose.data&&respose.data.message){
        console.log("response from server  ",respose.data.message)
setmessage(respose.data.message)
usenavigate('/login')
      }
      else{
        setmessage(respose.data.message)
      }
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <>
    <div className="register-container">
      <div className="container">
        <div className="row offset=1">
          <div className="col-md-5">
            <img src="register.png" alt="" className='register-mage' />
          </div>
          <div className="col-md-5">
            <h3 className="text-center titles">Create Account</h3>
            <h6>Get started with your new account</h6>
         {message && <p>{message}</p>}
           <form className='register-form' onSubmit={handlesubmit}>
  <div className="mb-3">
    <input type="text" className="form-control" placeholder='Enter Your Name' name='username' value={formData.username} onChange={handleform} />
  </div>
  <div className="mb-3">
    <input type="email" className="form-control"  placeholder='Enter Your Email' name='email'  value={formData.email} onChange={handleform}  />
  </div>
  <div className="mb-3">
   <input type="password" className="form-control" placeholder='Enter Your Passwrord' name='password'  value={formData.password} onChange={handleform}  />
  </div>
  <button type="submit" className="btn btn-secondary register-btn">Register</button>
  <p>Already have account ? <Link to='/login' >Please LogIn</Link>  </p>
 
</form>

          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Register