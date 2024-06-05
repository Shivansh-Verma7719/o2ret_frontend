import React from 'react';
import './login.css';
import logo from "../../assets/images/logo.png"
import password from "../../assets/icons/lock.svg";
import image from "../../assets/images/image 4.png";

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="login-form">
          
          <div className='sign-in'>
           <h2>Sign In</h2> 
            <p>If you don't have an account register<br /><strong>Register here!</strong></p>
          </div>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email address" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your Password" required />
            </div>
            <div className="options">
              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
      <div className="login-image">
       <img src={image} alt="dashboard-img" className='dash-img' />
       <div className='sign-text'><h2>Sign in to your Dashboard</h2></div>
        
      </div>
    </div>
  );
}

export default Login;
