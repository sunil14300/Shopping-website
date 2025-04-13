import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { handleSuccess, handleError } from "../../Util"; // ✅ Ensure correct path
import Navbar from "../../components/navbar/Navbar";

const Register = () => {
  const [signup, setSignup] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup((prev) => ({ ...prev, [name]: value }));
  };  

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, phone } = signup;

    // ✅ Corrected Validation
    if (!username || !email || !password || !phone) {
      return handleError("Name, email, password, and phone number are required");
    }

    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(signup),
      });

      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || "Signup failed";
        handleError(details);
      } else {
        handleError(message);
      }

      console.log("Signup Response:", result); // ✅ Debugging
    } catch (error) {
      console.error("Signup Error:", error); // ✅ Logs backend errors
      handleError(error.message || "Something went wrong");
    }
  };

  return (
    <>
    <Navbar/>
    <div className="register-container">
      <div className="register-wrapper">
        <form onSubmit={handlesubmit}>
          <h1>Create Your Account</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" name="username" required onChange={handleChange} value={signup.username} />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" name="password" required onChange={handleChange} value={signup.password} />
          </div>
          <div className="input-box">
            <input type="email" placeholder="E-mail" name="email" required onChange={handleChange} value={signup.email} />
          </div>
          <div className="input-box">
            <input type="tel" placeholder="Phone number" name="phone" required onChange={handleChange} value={signup.phone} />
          </div>

          <div className="register-agreement">
            <label>
              <input type="checkbox" required /> I agree to the <b>Terms</b> and <b>Privacy Policy</b>
            </label>
          </div>

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;
