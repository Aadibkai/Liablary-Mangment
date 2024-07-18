import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [showSignUp, setShowSignUp] = useState(true);
  const [showsignIn, setShowSignIn] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    role: "admin"
  });
  console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleClick = () => {
    // Your Google sign-in logic
  };

  useEffect(() => {
    setValue(localStorage.getItem("email") || '');
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/admin/signUp', formData);
      console.log("Signup successful:", response.data);
      navigate('/admin');  // Redirect to the /admin page after successful signup
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/admin/signIn', formData);
      console.log("Signin successful:", response.data);
      if (response.data === "admin") {
        navigate('/admin');
      } else {
        alert("Invalid Creditial!")
      }

    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div style={{
      paddingLeft: "110px",
      paddingRight: "110px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    }}>
      {showSignUp && (
        <div className="container" style={{
          width: "40%",
          height: "76%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "24px",
          background: "#fff",
          borderRadius: "18px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
          <div style={{ fontSize: "34px", fontWeight: "600", color: "#1e7898", fontFamily: "Poppins" }}>Sign Up</div>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "38px", paddingTop: "16px" }}>
            <div style={{ width: "90%", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input
                  style={{
                    outline: "none",
                    border: "none",
                    borderBottom: "1px solid #c7c7c7",
                    padding: "10px 10px",
                    fontFamily: "Poppins"
                  }}
                  type="text"
                  name="username"
                  value={formData.username}
                  placeholder="UserName"
                  onChange={handleChange}
                  onMouseOver={(e) => e.currentTarget.style.borderBottom = "1px solid #1e7898"}
                  onMouseOut={(e) => e.currentTarget.style.borderBottom = "1px solid #c7c7c7"}
                />

              </div>
              <input
                style={{
                  outline: "none",
                  border: "none",
                  borderBottom: "1px solid #c7c7c7",
                  padding: "10px 10px",
                  fontFamily: "Poppins"
                }}
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter Email"
                onChange={handleChange}
                onMouseOver={(e) => e.currentTarget.style.borderBottom = "1px solid #1e7898"}
                onMouseOut={(e) => e.currentTarget.style.borderBottom = "1px solid #c7c7c7"}
              />
                 <input
                  style={{
                    outline: "none",
                    border: "none",
                    borderBottom: "1px solid #c7c7c7",
                    padding: "10px 10px",
                    fontFamily: "Poppins"
                  }}
                  type="num"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  placeholder="phoneNumber"
                  onChange={handleChange}
                  onMouseOver={(e) => e.currentTarget.style.borderBottom = "1px solid #1e7898"}
                  onMouseOut={(e) => e.currentTarget.style.borderBottom = "1px solid #c7c7c7"}
                />

              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #c7c7c7",
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderBottom = "1px solid #1e7898"}
                  onMouseOut={(e) => e.currentTarget.style.borderBottom = "1px solid #c7c7c7"}
                >
                  
                  <input
                    style={{
                      outline: "none",
                      border: "none",
                      padding: "10px 10px",
                      borderRadius: "12px 12px 0 0",
                      fontFamily: "Poppins",
                      flex: 1,
                    }}
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #c7c7c7",
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderBottom = "1px solid #1e7898"}
                  onMouseOut={(e) => e.currentTarget.style.borderBottom = "1px solid #c7c7c7"}
                >
                  <input
                    style={{
                      outline: "none",
                      border: "none",
                      padding: "10px 10px",
                      borderRadius: "12px 12px 0 0",
                      fontFamily: "Poppins",
                      flex: 1,
                    }}
                    type={confirmPasswordVisible ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    placeholder="Confirm Password"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                style={{
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
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = "0 0 0 8px rgba(86, 154, 178, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = "none";
                }}
                onClick={handleSignup}
              >
                Create Account
              </button>
            </div>
          </div>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", paddingTop: "12px" }}>
            <div style={{ width: "90%", display: "flex", fontFamily: "Poppins", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ width: "45%", height: "1px", backgroundColor: "#c7c7c7" }}></div>
              or
              <div style={{ width: "45%", height: "1px", backgroundColor: "#c7c7c7" }}></div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #c7c7c7", padding: "10px 110px", borderRadius: "6px", gap: "6px" }}>
              <button style={{ background: "none", border: "none", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }} onClick={handleClick}>
                <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="Google Icon" style={{ width: "16px", height: "16px" }} />
                <span style={{ color: "#707580", fontFamily: "Poppins" }}>Sign in with Google</span>
              </button>
            </div>
          </div>
          <div style={{ fontFamily: "Poppins", color: "#707580", display: "flex", paddingTop: "16px" }}>
            Already have an account?
            <div
              style={{ color: "#1e7898", cursor: "pointer", paddingLeft: "6px" }}
              onClick={() => {
                setShowSignUp(false);
                setShowSignIn(true);
              }}
            >
              Sign In
            </div>

          </div>
        </div>
      )}

      {showsignIn && (
        <div className="container" style={{
          width: "40%",
          height: "66%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "24px",
          background: "#fff",
          borderRadius: "18px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
          <div style={{ fontSize: "34px", fontWeight: "600", color: "#1e7898", fontFamily: "Poppins" }}>Sign In</div>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "38px", paddingTop: "16px" }}>
            <div style={{ width: "90%", display: "flex", flexDirection: "column", gap: "16px" }}>
              <input
                style={{
                  outline: "none",
                  border: "none",
                  borderBottom: "1px solid #c7c7c7",
                  padding: "10px 10px",
                  fontFamily: "Poppins"
                }}
                type="text"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                onMouseOver={(e) => e.currentTarget.style.borderBottom = "1px solid #1e7898"}
                onMouseOut={(e) => e.currentTarget.style.borderBottom = "1px solid #c7c7c7"}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #c7c7c7",
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderBottom = "1px solid #1e7898"}
                  onMouseOut={(e) => e.currentTarget.style.borderBottom = "1px solid #c7c7c7"}
                >
                  <input
                    style={{
                      outline: "none",
                      border: "none",
                      padding: "10px 10px",
                      borderRadius: "12px 12px 0 0",
                      fontFamily: "Poppins",
                      flex: 1,
                    }}
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                style={{
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
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = "0 0 0 8px rgba(86, 154, 178, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = "none";
                }}
                onClick={handleSignin}
              >
                Sign In
              </button>
            </div>
          </div>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", paddingTop: "12px" }}>
            <div style={{ width: "90%", display: "flex", fontFamily: "Poppins", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ width: "45%", height: "1px", backgroundColor: "#c7c7c7" }}></div>
              or
              <div style={{ width: "45%", height: "1px", backgroundColor: "#c7c7c7" }}></div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #c7c7c7", padding: "10px 110px", borderRadius: "6px", gap: "6px" }}>
              <button style={{ background: "none", border: "none", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }} onClick={handleClick}>
                <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="Google Icon" style={{ width: "16px", height: "16px" }} />
                <span style={{ color: "#707580", fontFamily: "Poppins" }}>Sign in with Google</span>
              </button>
            </div>
          </div>
          <div style={{ fontFamily: "Poppins", color: "#707580", display: "flex", paddingTop: "16px" }}>
            Don't have an account?
            <div style={{ color: "#1e7898", cursor: "pointer", paddingLeft: "6px" }} onClick={() => setShowSignUp(true)}>
              Sign Up
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
