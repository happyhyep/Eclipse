import { useState } from "react";
import { PageDiv } from "../pages/Recruit";
import axios from 'axios';
import login from '../store/loginAxios'
import { Form, resolvePath, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/auth/auth";
import { getUserInfo } from "../store/userAxios";
import { setIsLoggedIn }from "../../src/App"
const Login = (props) => {
    const [loginId, setLoginId] = useState(''); 
    const [loginPw, setLoginPw] = useState('');
    const [loginUser, setLoginUser] = useState('');

    const onPressEnter = (e) => {
        if (e.key == 'Enter') {
            onSubmit();
        }
    };
    const navigate = useNavigate();
    const onSubmit = (e) => {
             e.preventDefault();  
             const formData = new FormData();
             formData.append("userid", loginId);
             formData.append("password",loginPw);        
             axios.post("http://ec2-50-18-22-205.us-west-1.compute.amazonaws.com:8080/login", formData)
             .then(function (response) {
                console.log(response)
                console.log('로그인');
                console.log(response.data);
                localStorage.setItem('user_id', loginId);
                console.log(localStorage.getItem('user_id'));
                props.setIsLoggedIn(true);
                navigate("/");
                }
             )
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