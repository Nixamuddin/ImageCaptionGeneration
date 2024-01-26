import axios from 'axios';
import React, { useState } from 'react';
import { useParams,useNavigate} from 'react-router-dom';

const Reset = () => {
  const [newpassword, setNewPassword] = useState("");
  const { resetToken } = useParams();
  const Navigate=useNavigate();
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
        console.log("Reset Token:", resetToken);
        const response = await axios.post('/api/v1/auth/reset', {token:resetToken, newpassword });
        console.log("Response from Server:", response.data);
        if (response.data.success) {
            alert('Successfully reset password');
            Navigate("/login")
        }
    } catch (error) {
        console.log(error);
    }
};


  return (
    <>
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center mt-5 min-vh-80">
          <div className="col-12 col-md-8 col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="mb-4">
                  <h5>New Password?</h5>
                  <p className="mb-2">Enter your New Password here:</p>
                </div>
                <form onSubmit={handlePasswordChange}>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">New Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="newpassword"
                      placeholder="Enter Your New Password"
                      value={newpassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 d-grid">
                    <button type="submit" className="btn btn-info">
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
