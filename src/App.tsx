import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import WorkspaceModal from "./app/Dashboard/HomePage/Board/Board-Component/WorkspaceModal";
import TaskInformation from "./app/Task/TaskInformation/TaskInformation";
const LayoutAuth = React.lazy(() => import("./app/Components/layout/auth"));
const Board = React.lazy(() => import("./app/Dashboard/HomePage/Board/Board"));
const AuthPage = React.lazy(
  () => import("./app/Authenticator/AuthentictionPages")
) as React.FC<any>;
// const AuthenticationPage = React.lazy(
//   () => import("./app/Authenticator/AuthentictionPages")
// );
// as React.FunctionComponent<any>;
// const WorkSpaceModal = React.lazy(
//   () => import("./app/Dashboard/HomePage/Board/Board-Component/WorkspaceModal")
// );
// const Register = React.lazy(
//   () => import("./app/Authenticator/Components/Register")
// );

// const ForgetPassword = React.lazy(
//   () => import("./app/Authenticator/Components/ForgetPassword")
// );
// const ResetPassword = React.lazy(
//   () => import("./app/Authenticator/Components/ResetPassword")
// );
const NotFound = React.lazy(
  () => import("./app/Authenticator/Components/NotFound")
);

const ListView = React.lazy(
  () => import("./app/Dashboard/HomePage/Board/ListView")
);
const CalendarView = React.lazy(
  () => import("./app/Dashboard/HomePage/Board/CalendarView")
);
const BView = React.lazy(() => import("./app/Dashboard/HomePage/Board/BView"));

const WorkSpace = React.lazy(() => import("./app/Dashboard/HomePage/WorkspaceContainer/Workspaces"));

const ProfilePages = React.lazy(() => import("./app/Profile/index"));
const Profile1 = React.lazy(() => import("./app/Profile/ProfilePages/Profile1"));
const Profile2 = React.lazy(() => import("./app/Profile/ProfilePages/Profile2"));
const Profile3 = React.lazy(() => import("./app/Profile/ProfilePages/Profile3"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutAuth />}>
            <Route path="authentication" element={<AuthPage />} />
            {/* <Route path="auth" element={<AuthenticationPage />} /> */}
          </Route>
          <Route path="board" element={<Board />}>
            <Route path="listview" element={<ListView />} />
            <Route path="calendarview" element={<CalendarView />} />
            <Route path="boardview" element={<BView />} />
            <Route path="workspace" element={<WorkSpace />} />

          </Route>

          <Route path="profile" element={<ProfilePages />}>
            <Route path="profile1" element={<Profile1 />} />
            <Route path="profile2" element={<Profile2 />} />
            <Route path="profile3" element={<Profile3 />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
