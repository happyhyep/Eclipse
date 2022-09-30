import { useState, React } from "react";

import AlarmList from "./AlarmList";
import { AlarmModalMain } from "./../Styled/Modal";
import {
  UserProfileModalHeaderButton,
  UserProfileModalFooter,
  UserProfileModalHeader,
  UserProfileModalMain,
  UserProfileModalSection,
  UserProfileModalOpenModal,
} from "./../Styled/Modal";

const AlarmModal = (props) => {
  const { modalOpen, setModalOpen, header, alarm } = props;
  const onClick = () => {
    setModalOpen(false);
  };
  return (
    <div
      style={{
        padding: "16px",
        display: "flex",
        alignItems: "center",
        animation: "modal-bg-show 0.s",
      }}
    >
      {modalOpen ? (
        <UserProfileModalSection>
          <UserProfileModalHeader>
            {header}
            <UserProfileModalHeaderButton onClick={close}>
              &times;
            </UserProfileModalHeaderButton>
          </UserProfileModalHeader>
          <AlarmModalMain>
            {alarm.map((it, idx) => (
              <AlarmList key={idx} alarm={it} />
            ))}
          </AlarmModalMain>
          <UserProfileModalFooter>
            <button className="close" onClick={onClick}>
              close
            </button>
          </UserProfileModalFooter>
        </UserProfileModalSection>
      ) : null}
    </div>
  );
};

export default AlarmModal;
