import React from 'react';
import './register.css';
import logo from "../../assets/images/logo.png"
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
            <p>If you already have an account you <br />can <a href="/login"><strong>Login here!</strong></a></p>
          </div>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email address" required />
            </div>
            <div className="input-group">
                <label htmlFor='username'>Username</label>
                <input type="text" id="username" placeholder="Enter your user name" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your Password" required />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Password</label>
              <input type="password" id="confirm-password" placeholder="Confirm your Password" required />
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
       <div className='sign-text'><h2>Sign Up to your Dashboard</h2></div>
        
      </div>
    </div>
  );
}

export default Login;
