import React, { useState } from 'react';
import './App.css';
import BaseLayout from './components/BaseLayout';
import { AuthContext } from './Context/auth/auth';
import { Routes, Route } from 'react-router-dom';
import routes from './components/Common/Routes';
import Main from './pages/Main';
import MainBeforeLogin from './components/Main/MainBeforeLogin';
import MainAfterLogin from './components/Main/MainAfterLogin';
import ChooseStudent from './pages/ChooseStudent';
import Animation from './pages/Animation';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [user, setUser] = useState(null); 

    // useEffect(() => {
    //     getCurrentUserInfo().then((res) => {
    //         setUser(res.data);
    //         setIsLoggedIn(true);
    //     });
    // }, []);

    return (
      <div style={{backgroundColor: "#c0c0c0", height:"100vh"}}>
            <AuthContext.Provider
                value={{
                    isLoggedIn,
                    user,
                }}
            >       
            <BaseLayout>
                <Routes>
                    {routes.map((r) => (
                        <Route
                            key={r.id}
                            path={r.path}
                            element={<r.component />}
                        />
                    ))}
                </Routes>
            </BaseLayout>
            <ChooseStudent></ChooseStudent>
        </AuthContext.Provider>
      </div>
    );
}

export default App;