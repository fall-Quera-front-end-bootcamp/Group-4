import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutAuth from "./components/layout/auth";
import Login from "./pages/Auth/Login/Index";
import Register from "./pages/Auth/Register/Index";
import ForgetPassword from "./pages/Auth/ForgetPassword/Index";
import ResetPassword from "./pages/Auth/ResetPassword/Index";
import NotFound from "./pages/Auth/NotFound/NotFound";
import navbar from "./components/navbar";
import './index.css';

  function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutAuth />}> 
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgetpassword" element={<ForgetPassword />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
