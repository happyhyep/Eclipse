import { useState } from "react";

const Login = () => {
    const [loginId, setLoginId] = useState(); 
    const [loginPw, setLoginPw] = useState();


    return (
        <>
        <div>
            <input
                placeholder={placeholder}
                theme={theme}
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                onKeyPress={onKeyPress}>
            </input>
        </div>
        <button className="searchBtn" onClick={onClick}> 🔍 </button>
        </>
        
    )
};

export default Login;