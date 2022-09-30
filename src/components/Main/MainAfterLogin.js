import React, { useEffect, useState } from "react";
import img1 from "../../Layout/img/mainafterlogin.png";
import { Link } from "react-router-dom";
import { Box } from "../Styled/Box";
import styled from "styled-components";
import { PageDiv } from "../../pages/Recruit";
import { useAuth } from "../../Context/auth/auth";
import AlarmModal from "../Common/AlarmModal";
import { AlarmList } from "../../store/temp/tempAlarmData";
const MainPage = () => {
  const [editMode, setEditMode] = useState(false);
  const [alarm, setAlarm] = useState(AlarmList);

  const auth = useAuth();
  const { user } = auth.auth;

  const [modalOpen, setModalOpen] = useState(null);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <PageDiv style={{ fontFamily: "Neo" }}>
      <Container></Container>
      <div style={{ position: "fixed", float: "right" }}>
        <Box
          style={{
            height: "200px",
            width: "500px",
            borderRadius: "15px",
            marginRight: "10px",
            position: "fixed",
            top: "100px",
            right: "30px",
          }}
        >
          <div style={{ fontSize: "25px" }}>
            {" "}
            {auth.auth.Nick_Name}님의 프로필
          </div>
          <div style={{ fontSize: "15px" }}> {auth.auth.Hakgwa}</div>
          <div style={{ fontSize: "15px" }}>
            전공 학점 평균 : {auth.auth.score} / 4.3
          </div>
          <div style={{ fontSize: "13px" }}>
            자기소개 : 안녕하세요 적당히 바람이 시원해 기분이 너무 좋아요 유후!
          </div>
          <div style={{ fontSize: "13px" }}></div>
        </Box>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          fontSize: "20px",
        }}
      >
        <Box style={{ height: "200px", borderRadius: "15px" }}>
          어떤 서비스를 이용하실래요?
          <div>
            <Link to={"/timetable"}>
              <div>
                <button
                  style={{
                    color: "black",
                    fontSize: "15px",
                    height: "30px",
                    borderRadius: "6px",
                    fontFamily: "Neo",
                    marginBottom: "8px",
                    marginTop: "10px",
                  }}
                >
                  1. 📅 시간표 추천
                </button>
              </div>
            </Link>
            <div>
              <Link to={"/recruit"}>
                <button
                  style={{
                    color: "black",
                    fontSize: "15px",
                    height: "30px",
                    borderRadius: "6px",
                    fontFamily: "Neo",
                    marginBottom: "8px",
                  }}
                >
                  2. 🔊 교수-학생 소통
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/give"}>
                <button
                  style={{
                    color: "black",
                    fontSize: "15px",
                    height: "30px",
                    borderRadius: "6px",
                    fontFamily: "Neo",
                    marginBottom: "8px",
                  }}
                >
                  3. 💘 후원 시스템
                </button>
              </Link>
              <div>
                <Link to={"/myprofile"}>
                  <button
                    style={{
                      color: "black",
                      fontSize: "15px",
                      height: "30px",
                      borderRadius: "6px",
                      fontFamily: "Neo",
                      marginBottom: "8px",
                    }}
                  >
                    4. 💬 내 프로필 관리
                  </button>
                </Link>
              </div>
              <button
                style={{
                  color: "black",
                  fontSize: "15px",
                  height: "30px",
                  borderRadius: "6px",
                  fontFamily: "Neo",
                  marginBottom: "8px",
                }}
                onClick={openModal}
              >
                5. 📩 알람 확인하기
              </button>
              <AlarmModal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                alarm={alarm}
              ></AlarmModal>
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
