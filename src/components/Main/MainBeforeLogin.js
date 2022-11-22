import React from 'react';
import img1 from '../../Layout/img/mainbeforelogin.png';
import { Box } from '../Styled/Box';
import khu from '../../Layout/img/khu.png';
import styled from 'styled-components';
import { PageDiv } from '../../pages/Recruit';
import { Link } from 'react-router-dom';


const MainBeforeLogin = () => {
      
    return (
        <PageDiv>
            <Container></Container>   
               <div style={{position: 'fixed', bottom:'0', width: '100%', fontFamily: "Neo"}}>
                <Box style={{height: '200px', borderRadius: '15px'}}>
                    <div style={{fontSize: '15px'}}>로그인 후 서비스를 이용해봐!</div>
                    <div style={{fontSize: '50px'}}>[ Eclipse ]</div>
                    <div style={{fontSize: '15px'}}>대학생의 진로 걱정 해결을 위한 웹서비스</div>
                    <Link to={"/login"}>
                        <button style={{fontSize: '20px', height:'35px', fontFamily: "Neo", color: 'black', borderRadius: '6px'}}>인포21로 로그인하기</button>
                    </Link>
                </Box>  
            </div>     
  
        </PageDiv>
    );
};


export default MainBeforeLogin;

const Container = styled.div`
  position: absolute;
  top: 50;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${img1});
  background-size: cover;
`;