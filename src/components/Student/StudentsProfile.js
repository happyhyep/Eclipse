import React, { useEffect, useState, useRef } from "react";
import styled, { useTheme } from "styled-components";
import { UserBox } from "../Styled/UserBox";
import UserProfileModal from "./UserProfileModal";
import Pbuttons from "../professor/Pbuttons";
import { useAuth } from "../../Context/auth/auth";
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
  const auth = useAuth();

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
      {auth?.isProfessor && <Pbuttons />}

      <UserProfileModal
        open={modalOpen}
        close={closeModal}
        header={user.nickname}
      ></UserProfileModal>
    </UserBox>
  );
}

export default FriendsProfile;
