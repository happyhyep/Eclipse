import React, { useEffect, useState } from "react";
import img1 from '../../Layout/img/mainafterlogin.png'
import { Link } from "react-router-dom";
import { Box } from "../Styled/Box";
import styled from 'styled-components';
import { PageDiv } from "../../pages/Recruit";

const MainPage = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <PageDiv style={{fontFamily: "Neo"}}>
        <div style= {{position: "fixed",float:'right'}}>
        <Box style={{height: '200px', width:'500px',alignItems:'right', borderRadius: '15px'}}></Box>
        </div>        
      <Container></Container>       
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          fontSize: "20px",
        }}
      >
        <Box style={{height: '200px', borderRadius: '15px'}}>
          어떤 서비스를 이용할거니?
          <div>
            <Link to={"/timetable"}>
              <div>
                <button style={{ color: "black", fontSize: "15px", height:'30px', borderRadius:'6px', fontFamily: "Neo", marginBottom:'10px'}}>
                  1. 시간표 어쩌고
                </button>
              </div>
            </Link>
            <div>
              <Link to={"/recruit"}>
                <button style={{ color: "black", fontSize: "15px", height:'30px', borderRadius:'6px', fontFamily: "Neo", marginBottom:'10px'}}>
                  2. 납치 어쩌고
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/give"}>
                <button style={{ color: "black", fontSize: "15px", height:'30px', borderRadius:'6px', fontFamily: "Neo", marginBottom:'10px'}}>
                  3. 후원 어쩌고
                </button>
              </Link>
              <div>
              <Link to={"/myprofile"}>
                <button style={{ color: "black", fontSize: "15px", height:'30px', borderRadius:'6px', fontFamily: "Neo", marginBottom:'10px'}}>
                  4. 내 프로필 관리하기
                </button>
              </Link>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </PageDiv>
  );
};

export default MainPage;

const Container = styled.div`
  position: absolute;
  top: 50;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${img1});
  background-size: cover;
`;