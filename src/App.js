import React, { useEffect, useState } from 'react';
import './App.css';
import BaseLayout from './components/BaseLayout';
import { Routes, Route } from 'react-router-dom';
import routes from './components/Common/Routes';


function App() {


    return (
      <div style={{backgroundColor: "#c0c0c0", height:"100vh"}}>
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
      </div>
    );
}

export default App;