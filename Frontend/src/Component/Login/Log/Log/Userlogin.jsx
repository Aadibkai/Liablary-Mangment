import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Userlogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [showSignUp, setShowSignUp] = useState(true);
  const [showSignIn, setShowSignIn] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    role: "user"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/user/signUp", {
        firstName: formData.firstName,
        num: formData.contact,
        email: formData.email,
        password: formData.password
      });
      console.log("User created successfully:", response.data);
      alert("Account created successfully!");
      navigate("/usermain");
    } catch (error) {
      console.error("There was an error!", error);
      alert("Failed to create account. Please try again.");
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
      alert("Sign In successful!");
      navigate("/usermain");
    } catch (error) {
      console.error("There was an error!", error);
      setError("Sign In failed. Please check your credentials.");
      alert("Sign In failed. Please check your credentials.");
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
                  name="contact"
                  value={formData.contact}
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
                  <svg
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    style={{ cursor: "pointer" }}
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 96 960 960"
                    width="24"
                    fill={passwordVisible ? "#1e7898" : "#c7c7c7"}
                  >
                    <path d="M480 666q57 0 95-38t38-95q0-57-38-95t-95-38q-57 0-95 38t-38 95q0 57 38 95t95 38Zm-2.063 148Q282 814 150.5 717T-13 576q65-105 196.5-202.5T478 276q195 0 326.5 97.5T973 576q-65 105-196.5 202.5T478 814Zm2-124q108 0 189-81t81-189q0-108-81-189t-189-81q-108 0-189 81t-81 189q0 108 81 189t189 81Zm0-410q-130 0-222 92t-92 222q0 130 92 222t222 92q130 0 222-92t92-222q0-130-92-222t-222-92Zm0 384q-91 0-155-64t-64-155q0-91 64-155t155-64q91 0 155 64t64 155q0 91-64 155t-155 64ZM480 666Zm0-240q57 0 95 38t38 95q0 57-38 95t-95 38q-57 0-95-38t-38-95q0-57 38-95t95-38Z" />
                  </svg>
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
                  <svg
                    onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                    style={{ cursor: "pointer" }}
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 96 960 960"
                    width="24"
                    fill={confirmPasswordVisible ? "#1e7898" : "#c7c7c7"}
                  >
                    <path d="M480 666q57 0 95-38t38-95q0-57-38-95t-95-38q-57 0-95 38t-38 95q0 57 38 95t95 38Zm-2.063 148Q282 814 150.5 717T-13 576q65-105 196.5-202.5T478 276q195 0 326.5 97.5T973 576q-65 105-196.5 202.5T478 814Zm2-124q108 0 189-81t81-189q0-108-81-189t-189-81q-108 0-189 81t-81 189q0 108 81 189t189 81Zm0-410q-130 0-222 92t-92 222q0 130 92 222t222 92q130 0 222-92t92-222q0-130-92-222t-222-92Zm0 384q-91 0-155-64t-64-155q0-91 64-155t155-64q91 0 155 64t64 155q0 91-64 155t-155 64Z" />
                  </svg>
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
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f1f1f1")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
            >
              <img style={{ height: "16px" }} src="./Google.png" alt="" />
              <div style={{ fontFamily: "Poppins", textDecoration: "none" }}>
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
      )}

      {showSignIn && (
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
                  <svg
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    style={{ cursor: "pointer" }}
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 96 960 960"
                    width="24"
                    fill={passwordVisible ? "#1e7898" : "#c7c7c7"}
                  >
                    <path d="M480 666q57 0 95-38t38-95q0-57-38-95t-95-38q-57 0-95 38t-38 95q0 57 38 95t95 38Zm-2.063 148Q282 814 150.5 717T-13 576q65-105 196.5-202.5T478 276q195 0 326.5 97.5T973 576q-65 105-196.5 202.5T478 814Zm2-124q108 0 189-81t81-189q0-108-81-189t-189-81q-108 0-189 81t-81 189q0 108 81 189t189 81Zm0-410q-130 0-222 92t-92 222q0 130 92 222t222 92q130 0 222-92t92-222q0-130-92-222t-222-92Zm0 384q-91 0-155-64t-64-155q0-91 64-155t155-64q91 0 155 64t64 155q0 91-64 155t-155 64Z" />
                  </svg>
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
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#145b72")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1e7898")}
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
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f1f1f1")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
            >
              <img style={{ height: "16px" }} src="./Google.png" alt="" />
              <div style={{ fontFamily: "Poppins" }}>Sign In With Google</div>
            </div>
            <div style={{ fontFamily: "Poppins", fontSize: "14px" }}>
              Don't Have an Account?{" "}
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
      )}
    </div>
  );
};

export default Userlogin;
