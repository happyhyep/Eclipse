import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Box } from "../Styled/Box";
import { getTest } from "../../store/axiosTest";
import { PageDiv } from "../../pages/Recruit";

const MainPage = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <PageDiv>
      <h1>
        <a style={{ color: "white", fontSize: "min(6vw, 40px)" }}>대충 배경</a>
      </h1>
      <div
        style={{
          display: "flex",

          gap: "0.5em",
          alignItems: "center",
          marginTop: "20px",
          justifyContent: "flex-end",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          fontSize: "20px",
        }}
      >
        <Box>
          어떤 서비스를 이용할거니?
          <div>
            <Link to={"/timetable"}>
              <div>
                <button style={{ color: "black", fontSize: "15px" }}>
                  1. 시간표 어쩌고
                </button>
              </div>
            </Link>
            <div>
              <Link to={"/recruit"}>
                <button style={{ color: "black", fontSize: "15px" }}>
                  2. 납치 어쩌고
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/give"}>
                <button style={{ color: "black", fontSize: "15px" }}>
                  3. 후원 어쩌고
                </button>
              </Link>
              <Link to={"/myprofile"}>
                <button style={{ color: "black", fontSize: "15px" }}>
                  4. 내 프로필 관리하기
                </button>
              </Link>
            </div>
          </div>
        </Box>
      </div>
    </PageDiv>
  );
};

export default MainPage;
