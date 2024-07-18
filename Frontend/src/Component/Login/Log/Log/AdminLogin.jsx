import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showSignUp, setShowSignUp] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    role: "admin"
  });

  const { username, email, password, role } = formData;

  console.log(formData)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/admin/signUp", {
        username,
        email,
        password,
        role: "admin",
      });

      if (response.data.role === "admin") {
        console.log("User created successfully:", response.data);
        alert("Account created successfully!");
        navigate("/adminmain");
      } else {
        console.log("admin created successfully ", response.data);
        alert("Account created successfully but user is not an admin!");
      }
    } catch (error) {
      console.error("Failed to create account:", error);
      alert("Failed to create account. Please try again.");
    }
  };

  useEffect(() => {
    setFormData(localStorage.getItem("email") || "");
  }, []);

  const handleSignin = async (e) => {
    e.preventDefault();
    console.log("ok")
    try {
      const response = await axios.post('http://localhost:3001/api/admin/signIn', formData);
      console.log("Sign In successful", response.data);
      localStorage.setItem("token", response.data.token);
      alert("Sign In successful!");
      navigate("/adminmain");
    } catch (error) {
      console.error("There was an error!", error);
      alert("Sign In failed. Please check your credentials.");
    }
  };

  console.log("ok")
  return (
    <div style={{
      paddingLeft: "110px",
      paddingRight: "110px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#f5f7fa"
    }}>
      <div className="container" style={{
        width: "40%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px",
        background: "#fff",
        borderRadius: "18px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}>
        <div style={{ fontSize: "34px", fontWeight: "600", color: "#1e7898", fontFamily: "Poppins" }}>{showSignUp ? "Sign Up" : "Sign In"}</div>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "38px", paddingTop: "16px" }}>
          {showSignUp && (
            <form style={{ width: "90%", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={inputContainerStyle}>
                <svg style={svgStyle} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm6-3H6v-1c0-2.66 5.33-4 6-4s6 1.34 6 4v1zm-6-6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
                <input
                  style={inputStyle}
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Username"
                  onChange={handleChange}
                />
              </div>
              <div style={inputContainerStyle}>
                <svg style={svgStyle} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm6-3H6v-1c0-2.66 5.33-4 6-4s6 1.34 6 4v1zm-6-6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
                <input
                  style={inputStyle}
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter Email"
                  onChange={handleChange}
                />
              </div>
              <div style={inputContainerStyle}>
                <svg style={svgStyle} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm6-3H6v-1c0-2.66 5.33-4 6-4s6 1.34 6 4v1zm-6-6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
                <input
                  style={inputStyle}
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={handleChange}
                />
                <button type="button" onClick={togglePasswordVisibility} style={toggleButtonStyle}>
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>
              <button
                style={buttonStyle}
                onClick={handleSignup}
              >
                Create Account
              </button>
            </form>
          )}
          {!showSignUp && (
            <form style={{ width: "90%", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={inputContainerStyle}>
                <svg style={svgStyle} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm6-3H6v-1c0-2.66 5.33-4 6-4s6 1.34 6 4v1zm-6-6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
                <input
                  style={inputStyle}
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <div style={inputContainerStyle}>
                <svg style={svgStyle} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm6-3H6v-1c0-2.66 5.33-4 6-4s6 1.34 6 4v1zm-6-6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
                <input
                  style={inputStyle}
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={handleChange}
                />
                <button type="button" onClick={togglePasswordVisibility} style={toggleButtonStyle}>
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>
              <button
                style={buttonStyle}
                onClick={handleSignin}
              >
                Sign In
              </button>
            </form>
          )}
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", paddingTop: "12px" }}>
            <div style={{ width: "90%", display: "flex", fontFamily: "Poppins", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ width: "45%", height: "1px", backgroundColor: "#c7c7c7" }}></div>
              or
              <div style={{ width: "45%", height: "1px", backgroundColor: "#c7c7c7" }}></div>
            </div>
            {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #c7c7c7", padding: "10px 110px", borderRadius: "6px", gap: "6px" }}>
              <button style={{ background: "none", border: "none", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }} >
                <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="Google Icon" style={{ width: "16px", height: "16px" }} />
                <span style={{ color: "#707580", fontFamily: "Poppins" }}>Sign in with Google</span>
              </button>
            </div> */}
          </div>
          <div style={{ fontFamily: "Poppins", color: "#707580", display: "flex", paddingTop: "16px" }}>
            {showSignUp ? "Already have an account?" : "Don't have an account?"}
            <div
              style={{ color: "#1e7898", cursor: "pointer", paddingLeft: "6px" }}
              onClick={() => {
                setShowSignUp(!showSignUp);
              }}
            >
              {showSignUp ? "Sign In" : "Sign Up"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

const inputContainerStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  borderBottom: "1px solid #c7c7c7",
  paddingBottom: "10px"
};

const inputStyle = {
  flex: 1,
  outline: "none",
  border: "none",
  fontFamily: "Poppins",
  padding: "10px 10px",
};

const buttonStyle = {
  border: "1px solid #1e7898",
  borderRadius: "6px",
  backgroundColor: "#1e7898",
  color: "#fff",
  textAlign: "center",
  padding: "10px 146px",
  cursor: "pointer",
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: "500",
  transition: "all 0.3s",
  marginTop: "20px",
};

const toggleButtonStyle = {
  background: "none",
  border: "none",
  color: "#1e7898",
  cursor: "pointer",
  fontSize: "12px",
  padding: "0",
};

const svgStyle = {
  width: "20px",
  height: "20px",
  color: "#1e7898",
};
