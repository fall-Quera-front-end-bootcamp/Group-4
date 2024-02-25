import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

const LayoutAuth = React.lazy(() => import("./app/Components/layout/auth"));
const Board = React.lazy( () => import('./app/Dashboard/HomePage/Board/Board') )
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

const ListView = React.lazy(
  () => import("./app/Dashboard/HomePage/Board/ListView")
)
const CalendarView = React.lazy(
  () => import("./app/Dashboard/HomePage/Board/CalendarView")
)
const BView = React.lazy(
  () => import("./app/Dashboard/HomePage/Board/BView")
)


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
          </Route>  
          <Route path="board" element={<Board/>}>
              <Route path="listview" element={<ListView/>}/>
              <Route path="calendarview" element={<CalendarView/>}/>
              <Route path="boardview" element={<BView/>}/>
          </Route>  
            <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
