import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

const LayoutAuth = React.lazy(() => import("./app/Components/layout/auth"));
const Board = React.lazy( () => import('./app/Dashboard/HomePage/Board-Component/Board/Board') )
const Login = React.lazy(() => import("./app/Authenticator/Components/Login"));
const Register = React.lazy(
  () => import("./app/Authenticator/Components/Register")
);

const ForgetPassword = React.lazy(
  () => import("./app/Authenticator/Components/ForgetPassword")
);
const ResetPassword = React.lazy(
  () => import("./app/Authenticator/Components/ResetPassword")
);
const NotFound = React.lazy(
  () => import("./app/Authenticator/Components/NotFound")
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
          <Route path="/" element={<LayoutAuth />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgetpassword" element={<ForgetPassword />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            <Route path="*" element={<NotFound/>} />
            <Route path="board" element={<Board/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
