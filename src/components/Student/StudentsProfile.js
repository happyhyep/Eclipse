import React, { useEffect, useState, useRef } from "react";
import styled, { useTheme } from "styled-components";
import { UserBox } from "../Styled/UserBox";
import UserProfileModal from "./UserProfileModal";

function FriendsProfile({ user }) {
  const {
    profileImage,
    nickname,
    department,
    department_score,
    student_id,
    etc,
  } = user;
  const [isRequest, setIsRequest] = useState(false);
  const theme = useTheme();

  const onRequestHandler = async (targetUserId) => {
    //alert(`❗친구요청실패❗${e}`); //주석지우기 (8/23)
    setIsRequest(true);
    alert("대학원 납치 완료!"); // 지우기 (8/23)
  };
  const onCancelHandler = () => {
    setIsRequest(false);
    alert("요청 취소 완료!");
  };

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (targetUserId) => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <UserBox theme={theme} width="200px" height="260px">
      <div style={{ height: "130px", maxHeight: "130px" }}>
        {profileImage && (
          <div style={{ marginTop: "35%" }}>
            <img src={profileImage} width="80px" height="80px" />
          </div>
        )}
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "15px", marginBottom: "1px", fontFamily: "Neo" }}>
          {nickname}
        </p>
        <p style={{ fontSize: "12px", marginBottom: "1px", fontFamily: "Neo" }}>
          {department} {student_id}학번
        </p>
        <p style={{ fontSize: "12px", marginBottom: "1px", fontFamily: "Neo" }}>
          {etc}
        </p>
      </div>
      <button
        onClick={() => {
          openModal(user.id);
        }}
        style={{
          fontSize: "10px",
          height: "35px",
          fontFamily: "Neo",
          color: "black",
          borderRadius: "6px",
        }}
      >
        프로필 보기
      </button>
      {!isRequest ? (
        <button
          onClick={() => {
            onRequestHandler();
          }}
          style={{
            paddingBottom: "1px",
            height: "50px",
            marginTop: "10px",
            fontSize: "13px",
            fontFamily: "Neo",
            color: "black",
            borderRadius: "8px",
          }}
        >
          💌 대학원 섭외하기
        </button>
      ) : (
        <button
          onClick={() => {
            onCancelHandler();
          }}
          style={{ marginTop: "10px", fontSize: "15px", color: "black" }}
        >
          ❌ 섭외 취소하기
        </button>
      )}
      <UserProfileModal
        open={modalOpen}
        close={closeModal}
        header={user.nickname}
      ></UserProfileModal>
    </UserBox>
  );
}

export default FriendsProfile;
