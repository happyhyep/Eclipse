import React, { useState } from "react";
import "./App.css";
import BaseLayout from "./components/BaseLayout";
import { AuthContext } from "./Context/auth/auth";
import Main from "./pages/Main";
import Animation from "./pages/Animation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Timetable from "./pages/Timetable";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
