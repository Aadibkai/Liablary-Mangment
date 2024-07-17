import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Userlogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [showSignUp, setShowSignUp] = useState(true);
  const [showsignIn, setShowSignIn] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    username: "",
    contact: "",
  });

  console.log(1111, formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/user/signUp', formData);
      console.log("Signup successful:", response.data);

      navigate("/usermain");
    } catch (error) {
      console.error("There was an error!", error);
    }
  };


  useEffect(() => {
    setFormData(localStorage.getItem("email") || "");
  }, []);


  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post('http://localhost:3001/api/user/signIn', formData);
      console.log("Sign In successful", response.data);
      localStorage.setItem("token", response.data.token); 
      navigate("/usermain");
    } catch (error) {
      console.error("There was an error!", error);
      setError("Sign In failed. Please check your credentials.");
    }
  };


  return (
    <div
      style={{
        paddingLeft: "110px",
        paddingRight: "110px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {showSignUp && (
        <>
          <div
            className="container"
            style={{
              width: "40%",
              height: "76%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "24px",
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "34px",
                fontWeight: "600",
                color: "#1e7898",
                fontFamily: "Poppins",
              }}
            >
              Sign Up
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "38px",
                paddingTop: "16px",
              }}
            >
              <div style={{ width: "90%", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "10px" }}>
                  <input
                    style={{
                      outline: "none",
                      border: "none",
                      borderBottom: "1px solid #c7c7c7",
                      padding: "10px 10px",
                      fontFamily: "Poppins",
                    }}
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    placeholder="First Name"
                    onChange={handleChange}
                  />
                  <input
                    style={{
                      outline: "none",
                      border: "none",
                      borderBottom: "1px solid #c7c7c7",
                      padding: "10px 10px",
                      fontFamily: "Poppins",
                    }}
                    type="text"
                    name="num"
                    value={formData.lastName}
                    placeholder="Contact"
                    onChange={handleChange}
                  />
                </div>
                <input
                  style={{
                    outline: "none",
                    border: "none",
                    borderBottom: "1px solid #c7c7c7",
                    padding: "10px 10px",
                    fontFamily: "Poppins",
                  }}
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Enter Email"
                  onChange={handleChange}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #c7c7c7",
                    }}
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #c7c7c7",
                  padding: "10px 110px",
                  borderRadius: "6px",
                  gap: "6px",
                }}
              >
                <img style={{ height: "16px" }} src="./Google.png" alt="" />
                <div style={{ cursor: "pointer", fontFamily: "Poppins", textDecoration: "none" }}>
                  Sign Up With Google
                </div>
              </div>
              <div style={{ fontFamily: "Poppins", fontSize: "14px" }}>
                Already have an account?{" "}
                <span
                  style={{ color: "#1e7898", cursor: "pointer" }}
                  onClick={() => {
                    setShowSignUp(false);
                    setShowSignIn(true);
                  }}
                >
                  Sign In
                </span>
              </div>
            </div>
          </div>
        </>
      )}

      {showsignIn && (
        <>
          <div
            className="container"
            style={{
              width: "40%",
              height: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "24px",
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "34px",
                fontWeight: "600",
                color: "#1e7898",
                fontFamily: "Poppins",
              }}
            >
              Sign In
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "38px",
                paddingTop: "16px",
              }}
            >
              <div style={{ width: "90%", display: "flex", flexDirection: "column", gap: "16px" }}>
                <input
                  style={{
                    outline: "none",
                    border: "none",
                    borderBottom: "1px solid #c7c7c7",
                    padding: "10px 10px",
                    display: "flex",
                    fontFamily: "Poppins",
                  }}
                  type="text"
                  name="username"
                  value={formData.email}
                  placeholder="Enter Email"
                  onChange={handleChange}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #c7c7c7",
                    }}
                  >
                    <input
                      style={{
                        outline: "none",
                        border: "none",
                        padding: "10px 10px",
                        borderRadius: "12px 12px 0 0",
                        display: "flex",
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
                  className=""
                  style={{
                    border: "1px solid #1e7898",
                    borderRadius: "6px",
                    backgroundColor: "#1e7898",
                    color: "#fff",
                    textAlign: "center",
                    padding: "10px 182px",
                    cursor: "pointer",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "500",
                    transition: "all 0.3s",
                  }}
                  onClick={handleSignIn}
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #c7c7c7",
                  padding: "10px 110px",
                  borderRadius: "6px",
                  gap: "6px",
                }}
              >
                <img style={{ height: "16px" }} src="./Google.png" alt="" />
                <div
                  style={{ cursor: "pointer", fontFamily: "Poppins" }}
                >
                 Sign Up With Google
                </div>
              </div>
              <div style={{ fontFamily: "Poppins", fontSize: "14px" }}>
                Don't Have a Account{" "}
                <span
                  style={{ color: "#1e7898", cursor: "pointer" }}
                  onClick={() => {
                    setShowSignUp(true);
                    setShowSignIn(false);
                  }}
                >
                  Sign Up
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Userlogin;
