import { useState } from "react";
import { PageDiv } from "../pages/Recruit";

const Login = () => {
    const [loginId, setLoginId] = useState(''); 
    const [loginPw, setLoginPw] = useState('');
    const onPressEnter = (e) => {
        if (e.key == 'Enter') {
            onSubmit();
        }
    };

    const onSubmit = (e) => {
             e.preventDefault();          
             //auth
             alert('로그인 완료');
            setLoginId('');
            setLoginPw('');

    };

    return (
        <PageDiv style={{
            position: "fixed",
            bottom: "50%",
            width: "100%",
        }}>
        <fieldset>
        <legend>Login</legend>
            <div style={{fontSize: '10px'}}>ID {'  '}
                <input
                    id="loginId"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    onKeyPress={onPressEnter}>
                </input>
            </div>
            <div style={{fontSize: '10px'}}>Password {'  '}
                <input
                    id="loginPw"
                    value={loginPw}
                    onChange={(e) => setLoginPw(e.target.value)}
                    onKeyPress={onPressEnter}>
                </input>
            </div>
        </fieldset>
        <button onClick={(e) => onSubmit(e)}> 로그인 </button>
        </PageDiv>
        
    )
};

export default Login;