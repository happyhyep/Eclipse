import React, { useState } from "react";
import "./App.css";
import BaseLayout from "./components/BaseLayout";
import { AuthContext } from "./Context/auth/auth";
import routes from "./components/Common/Routes";
import Main from "./pages/Main";
import MainBeforeLogin from "./components/Main/MainBeforeLogin";
import MainAfterLogin from "./components/Main/MainAfterLogin";
import ChooseStudent from "./pages/ChooseStudent";
import Animation from "./pages/Animation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isStudent, setIsStudent] = useState(false);
  const [isProfessor, setIsProfessor] = useState(true);
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
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
