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
          <div style={{ fontSize: "25px", fontFamily: "Neo", marginBottom: "15px"}}> 호호승님의 프로필</div>
          <div style={{ fontSize: "15px", fontFamily: "Neo", marginBottom: "10px" }}> 컴퓨터공학과 19학번</div>
          <div style={{ fontSize: "15px", fontFamily: "Neo", marginBottom: "15px" }}> 전공 학점 평균 :  4.15 / 4.3</div>
          <div style={{ fontSize: "13px", fontFamily: "Neo", marginBottom: "10px" }}> 수상 이력 : 2022 khuthon</div>
          <div style={{ fontSize: "13px", fontFamily: "Neo", marginBottom: "10px" }}> 관심 분야 : #실감미디어, #다우기술 </div>
          <div style={{ fontSize: "11px", fontFamily: "Neo"  }}>자기소개 : 안녕하세요 적당히 바람이 시원해 기분이 너무 좋아요 유후!</div>

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
