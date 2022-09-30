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
        <fieldset style={{width: '30%', height: '100px', alignItems: 'center'}}>
        <legend style={{fontFamily: "Neo",fontSize: '20px'}}>Login</legend>
        <div style={{alignItems: 'center', display:'flex', justifyContent: 'center', marginTop: '5%'}}>
            <div style={{fontFamily: "Neo", fontSize: '15px', marginLeft: '40px', marginRight: '30px'}}>ID {'  '}
                <input
                    style={{ height: '20px'}}
                    id="loginId"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    onKeyPress={onPressEnter}>
                </input>
            </div>
            <div style={{fontFamily: "Neo",fontSize: '15px'}}>Password {'  '}
                <input
                    style={{ height: '20px'}}
                    id="loginPw"
                    value={loginPw}
                    onChange={(e) => setLoginPw(e.target.value)}
                    onKeyPress={onPressEnter}>
                </input>
            </div>
        </div>
        </fieldset>
        <button style={{ fontFamily: "Neo", fontSize: '18px'}} onClick={(e) => onSubmit(e)}> 로그인 </button>
        </PageDiv>
        
    )
};

export default Login;