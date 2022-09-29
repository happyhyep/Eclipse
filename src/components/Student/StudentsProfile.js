import React, { useEffect, useState, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { UserBox} from '../../components/Styled/UserBox';
import UserProfileModal from '../UserProfileModal';

function FriendsProfile({ user }) {
    const { profileImage, nickname, department } = user;
    const [isRequest, setIsRequest] = useState(false);
    const theme = useTheme();

    const onRequestHandler = async (targetUserId) => {
                //alert(`❗친구요청실패❗${e}`); //주석지우기 (8/23)
                setIsRequest(true);
                alert('친구요청완료!'); // 지우기 (8/23)
    };
    const onCancelHandler = () => {
        
            setIsRequest(false);
            alert('친구요청 취소 완료!'); 
        
    };


    const [modalOpen, setModalOpen] = useState(false);
    const openModal = (targetUserId) => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <UserBox theme={theme} width="200px" height="240px">
            <div style={{ height: '130px', maxHeight: '130px' }}>
                {profileImage && (
                    <div style={{marginTop: '35%' }}><img src={profileImage} width="100px" height="100px" /></div>
                )}
            </div>
            <p>{nickname}</p>
            <p>{department}</p>
            <button
                    onClick={() => {
                        openModal(user.id);
                    }}
                    style={{ fontSize: '10px' }}
                >
                    프로필 보기
                </button>
            {!isRequest ? (
                <button
                    onClick={() => {
                        onRequestHandler();
                    }}
                >
                    💌 대학원 섭외하기
                </button>
            ) : (
                <button
                    onClick={() => {
                        onCancelHandler();
                    }}
                >
                    ❌ 섭외 취소하기
                </button>
            )}
                <UserProfileModal
                    open={modalOpen}
                    close={closeModal}
                    header={user.nickname}
                >
                </UserProfileModal>
        </UserBox>
    );
}

export default FriendsProfile;
