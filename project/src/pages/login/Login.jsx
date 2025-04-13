import React, { useState } from 'react';
import "./Login.css";
import { handleSuccess, handleError } from "../../Util";
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

const Login = () => {
  const [logininfo, setLogininfo] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogininfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = logininfo;

    if (!email || !password) {
      return handleError('Email and password are required');
    }

    try {
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logininfo),
      });

      const result = await response.json();
      const { success, message, jwtToken, username, error } = result; // ✅ updated from 'name' to 'username'

      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('username', username); // ✅ optional
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || message || 'Login failed';
        handleError(details);
      } else if (!success) {
        handleError(message);
      }

      console.log(result);
    } catch (error) {
      handleError(error.message || 'Something went wrong');
    }
  };

  return (<>
    <Navbar/>
    <div className="login-container">
      <div className="login-wrapper">
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" placeholder='Username' name='email' value={logininfo.email} onChange={handleChange} />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' name='password' value={logininfo.password} onChange={handleChange} />
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" />Remember Me
            </label>
            <a href="/#">Forget Password</a>
          </div>
          <button type='submit'>Login</button>
          <div className="register-link">
            <p>don't have an account? <a href="/register">Register</a></p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;
