import React from "react";
import { Form } from "react-router-dom";
import {
  UserProfileModalHeaderButton,
  UserProfileModalFooter,
  UserProfileModalHeader,
  UserProfileModalMain,
  UserProfileModalSection,
  UserProfileModalOpenModal,
} from "../Styled/Modal";
import { useAuth } from "../../Context/auth/auth";

const UserProfileModal = (props, { user }) => {
  const { open, close, header } = props;

  return (
    <div
      style={{
        padding: "16px",
        display: "flex",
        alignItems: "center",
        animation: "modal-bg-show 0.3s",
      }}
    >
      {open ? (
        <UserProfileModalSection>
          <UserProfileModalHeader>
            {header}님의 프로필
            <UserProfileModalHeaderButton onClick={close}>
              &times;
            </UserProfileModalHeaderButton>
          </UserProfileModalHeader>
          <UserProfileModalMain>
          <div style={{ fontSize: "25px", fontFamily: "Neo", marginBottom: "15px"}}> 나야나님의 프로필</div>
          <div style={{ fontSize: "15px", fontFamily: "Neo", marginBottom: "10px" }}> 컴퓨터공학과 21학번</div>
          <div style={{ fontSize: "15px", fontFamily: "Neo", marginBottom: "15px" }}> 전공 학점 평균 :  2.5 / 4.3</div>
          <div style={{ fontSize: "13px", fontFamily: "Neo", marginBottom: "10px" }}> 수상 이력 : 2022 봄 프로그래밍 대회</div>
          <div style={{ fontSize: "13px", fontFamily: "Neo", marginBottom: "10px" }}> 관심 분야 : #프론트엔드 </div>
          <div style={{ fontSize: "11px", fontFamily: "Neo"  }}>자기소개 : 프론트엔드에 관심이 있습니다.</div>

          </UserProfileModalMain>
          <UserProfileModalFooter>
            <button className="close" onClick={close}>
              close
            </button>
          </UserProfileModalFooter>
        </UserProfileModalSection>
      ) : null}
    </div>
  );
};

export default UserProfileModal;
