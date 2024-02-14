import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutAuth from "./components/layout/auth";
import Login from "./pages/Auth/Login/Index";
import Register from "./pages/Auth/Register/Index";
import ForgetPassword from "./pages/Auth/ForgetPassword/Index";
import ResetPassword from "./pages/Auth/ResetPassword/Index";
import navbar from "./components/navbar";
function App() {
  return (
    <>
      <div>hello</div>

    
    


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutAuth />}> 
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgetpassword" element={<ForgetPassword />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
