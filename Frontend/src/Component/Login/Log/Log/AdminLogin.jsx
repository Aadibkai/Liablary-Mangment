
        // import { auth, provider } from "./Config";
// import { signInWithPopup } from "firebase/auth"
// import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [showSignUp, setShowSignUp] = useState(true)
  const [showsignIn, setShowSignIn] = useState(false)
  const [value, setValue] = useState("")
  const navigate = useNavigate();

  const [forData, setForData] = useState({
    username: '',
    phoneNumber: '',
    password: '',
  });


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setForData((prevData)=>({
      ...prevData,
      [name]:value,
    }))
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleClick = () => {

      ((data) => {
        const email = data.user.email;
        setValue(email);
        // console.log(7676, data);
        localStorage.setItem("email", email);
        if (data.user.emailVerified) {
          navigate("/newUser");
        } else {
          alert("Please verify your email first.");
        }
      })
      .catch(error => {
        console.error("Error during sign-in:", error);
      });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email") || '');
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/signup", formData);
      console.log("Signup successful:", response.data);
      
     
      navigate('/admin'); 
    } catch (error) {
      console.error("There was an error!", error);
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
        height: "100vh"
      }}
    >
    
      {
        showSignUp && (
          <>
            <div className="container" style={{ width: "40%", height: "76%", display: "flex", flexDirection: "column", alignItems: "center", padding: "24px", background: "#fff", borderRadius: "18px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
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
                      name="firstName"
                      value={formData.firstName}
                      placeholder="First Name"
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
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      placeholder="Last Name"
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
                        name="username"
                        value={formData.confirmPassword}
                        placeholder="UserName"
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
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #c7c7c7", padding: "10px 110px", borderRadius: "6px", gap: "6px" }} onMouseEnter={(e) => {
                  e.target.style.boxShadow = "0 0 0 8px rgba(86, 154, 178, 0.25)";
                }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = "none";
                  }}>
                  <img style={{ height: "16px" }} src="./Google.png" alt="" />

                  <div
                    onClick={handleClick}
                    style={{ cursor: "pointer", fontFamily: "Poppins", textDecoration: "none" }}
                  >
                    Sign Up With Google
                  </div>
                </div>
                <div  style={{ fontFamily: "Poppins", fontSize: "14px" }}>
                  Already have an account? <span style={{ color: "#1e7898", cursor: "pointer" }} onClick={() => {
                    setShowSignUp(false)
                    setShowSignIn(true)
                  }}>Sign In</span>
                </div>
              </div>
            </div>
          </>
        )
      }
      {
        showsignIn && (
          <>
            <div className="container" style={{ width: "40%", height: "60%", display: "flex", flexDirection: "column", alignItems: "center", padding: "24px", background: "#fff", borderRadius: "18px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              <div style={{ fontSize: "34px", fontWeight: "600", color: "#1e7898", fontFamily: "Poppins" }}>Sign In</div>
              <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "38px", paddingTop: "16px" }}>

                <div style={{ width: "90%", display: "flex", flexDirection: "column", gap: "16px", padding: "10px 10px" }}>

                  <input
                    style={{
                      outline: "none",
                      border: "none",
                      borderBottom: "1px solid #c7c7c7",
                      padding: "10px 10px",
                      display: "flex",
                      fontFamily: "Poppins"
                    }}
                    type="text"
                    name="username"
                    value={forData.username}
                    placeholder="Enter Username"
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
                          display: "flex",
                          fontFamily: "Poppins",
                          flex: 1,
                        }}
                        type={passwordVisible ? "text" : "password"}
                        name="password"
                        value={forData.password}
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
                    onMouseEnter={(e) => {
                      e.target.style.boxShadow = "0 0 0 8px rgba(86, 154, 178, 0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.boxShadow = "none";
                    }}
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
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #c7c7c7", padding: "10px 110px", borderRadius: "6px", gap: "6px" }} onMouseEnter={(e) => {
                  e.target.style.boxShadow = "0 0 0 8px rgba(86, 154, 178, 0.25)";
                }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = "none";
                  }}>
                  <img style={{ height: "16px" }} src="./Google.png" alt="" />
                  <div
                    onClick={handleClick}
                    style={{ cursor: "pointer", fontFamily: "Poppins" }}
                  >
                    <Link to={"/newUser"}>
                      Sign Up With Google
                    </Link>
                  </div>
                </div>
                <div style={{ fontFamily: "Poppins", fontSize: "14px" }}>
                  Don't Have a Account <span style={{ color: "#1e7898", cursor: "pointer" }} onClick={() => {
                    setShowSignUp(true)
                    setShowSignIn(false)
                  }}>Sign Up</span>
                </div>
              </div>
            </div>
          </>
        )
      }


    </div>

  );
};

export default AdminLogin;

 