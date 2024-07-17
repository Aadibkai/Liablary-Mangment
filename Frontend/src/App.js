import React from "react";
import { Routes, Route } from "react-router-dom";
import First from "./Component/Login/Log/First";
import AdminLogin from "./Component/Login/Log/Log/AdminLogin";
import Userlogin from "./Component/Login/Log/Log/Userlogin";
import {UserMain} from "../src/Component/User/UserMain"

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<First />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/user" element={<Userlogin />} />
      <Route path="/usermain" element={<UserMain />} />
    </Routes>
  );
};

export default App;
