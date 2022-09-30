import React, { useState } from "react";
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isStudent, setIsStudent] = useState(true);
  const [isProfessor, setIsProfessor] = useState(false);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //     getCurrentUserInfo().then((res) => {
  //         setUser(res.data);
  //         setIsLoggedIn(true);
  //     });
  // }, []);

  return (
    <div style={{ backgroundColor: "#c0c0c0", height: "100vh" }}>
      <AuthContext.Provider
        value={{
          isLoggedIn,
          user,
          isStudent,
          isProfessor,
        }}
      >
        <BaseLayout></BaseLayout>
        <Router>
          <Routes>
            <Route key="main" path="/" element={<Main />} />
            <Route key="timetable" path="/timetable" element={<Timetable />} />
            <Route key="recruit" path="/recruit" element={<Recruit />} />
            <Route key="giveit" path="/give" element={<Give />} />
            <Route key="login" path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
