import React, { useState, useEffect } from "react";
import "./App.css";
import BaseLayout from "./components/BaseLayout";
import { AuthContext } from "./Context/auth/auth";
import Main from "./pages/Main";
import Animation from "./pages/Animation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Timetable from "./pages/Timetable";
import Recruit from "./pages/Recruit";
import Give from "./pages/Give";
import Login from "./pages/LoginPage";
import LoginPage from "./pages/LoginPage";
import Myprofile from "./pages/Myprofile";
import { tempUser } from "./store/temp/tempUserData";
import { tempProfessorData } from "./store/temp/tempProfessorData";
import Payment from "./pages/Payment";
import { getUserInfo } from "./store/userAxios";
import TimetableInfo from "./components/Student/TimetableInfo";
import TableTest from "./components/Common/TableTest";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [isProfessor, setIsProfessor] = useState(true);
  const [auth, setUser] = useState(); // null
  var currentuser = localStorage.getItem('user_id');

  // useEffect(() => {
  //   getUserInfo(currentuser).then((res) => {
  //      setUser(res.data);
  //      //setIsLoggedIn(true);
  //    });
  //  }, []);

  return (
    <div style={{ backgroundColor: "#c0c0c0", height: "100vh" }}>
      <AuthContext.Provider
        value={{
          isLoggedIn,
          auth,
          isStudent,
          isProfessor,
        }}
      >
        <Router>
          <BaseLayout></BaseLayout>
          <Routes>
            <Route key="main" path="/" element={<Main />} />
            <Route key="timetable" path="/timetable" element={<Timetable />} />
            <Route
              key="timetable_info"
              path="/timetable_info/:id"
              element={<TimetableInfo />}
            />
            <Route key="recruit" path="/recruit" element={<Recruit />} />
            <Route key="giveit" path="/give" element={<Give />} />
            <Route key="login" path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />

            <Route key="myprofile" path="/myprofile" element={<Myprofile />} />
            <Route key="payment" path="/payment" element={<Payment />} />
            <Route
              key="timetabletest"
              path="/tabletest"
              element={<TableTest />}
            />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
