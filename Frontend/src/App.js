import React from "react";
import { Routes, Route } from "react-router-dom";
import First from "./Component/Login/Log/First";
import AdminLogin from "./Component/Login/Log/Log/AdminLogin";
import Userlogin from "./Component/Login/Log/Log/Userlogin";
import AdminMain from "./Component/Admin/AdminMain";
import AdminDashboard from "./Component/Admin/AdminDashbord";
import UserMain from "./Component/User/UserMain";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<First />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/user" element={<Userlogin />} />
      <Route path="/usermain" element={<UserMain />} />
      <Route path="/adminmain" element={<AdminMain/>}/>
      <Route path="/admindash" element={<AdminDashboard/>}/>
      
    </Routes>
  );
};

export default App;
