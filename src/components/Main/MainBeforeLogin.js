import React from 'react';
import img1 from '../../Layout/img/person.png';
import { Box } from '../Styled/Box';
import khu from '../../Layout/img/khu.png';
import styled from 'styled-components';
import { PageDiv } from '../../pages/Recruit';

const MainBeforeLogin = () => {
      
    return (
        <PageDiv>
            <Container></Container>   
            <div style={{ height: '80%', color: '#ffc83d', display: 'flex', fontSize: '30px'}}>
                <img src={img1} width="300px"/>          
            </div> 
            <div style={{position: 'fixed', bottom:'0', width: '100%'}}>
                <Box style={{height: '200px', fontSize: '30px'}}>
                    로그인 후 서비스를 이용해봐!
                    <button style={{fontSize: '20px'}}>인포21로 로그인하기</button>
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
  opacity: 0.7;
  background: url(https://img.etnews.com/news/article/2018/08/30/cms_temp_article_30134335678634.jpg);
  background-size: cover;
`;