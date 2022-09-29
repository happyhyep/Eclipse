import React, { useEffect, useState, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { UserBox} from '../../components/Styled/UserBox';
import UserProfileModal from '../UserProfileModal';

function FriendsProfile({ user }) {
    const { profileImage, nickname, department, department_score } = user;
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
        <UserBox theme={theme} width="200px" height="260px">
            <div style={{ height: '130px', maxHeight: '130px' }}>
                {profileImage && (
                    <div style={{marginTop: '35%' }}><img src={profileImage} width="80px" height="80px" /></div>
                )}
            </div>
            <div style={{textAlign: 'center'}}>
            <p style={{fontSize: '15px', marginBottom: '1px'}}>{nickname}</p>
            <p style={{fontSize: '12px', marginBottom: '0.5px'}}>{department}</p>
            <p style={{fontSize: '12px', marginTop: '0.5px'}}>전공 평점 : {department_score}</p>
            </div>
            <button
                    onClick={() => {
                        openModal(user.id);
                    }}
                    style={{ fontSize: '10px', color: 'black' }}
                >
                    프로필 보기
                </button>
            {!isRequest ? (
                <button
                    onClick={() => {
                        onRequestHandler();
                    }}
                    style={{ marginTop: '10px', fontSize: '15px', color: 'black' }}
                >
                    💌 대학원 섭외하기
                </button>
            ) : (
                <button
                    onClick={() => {
                        onCancelHandler();
                    }}
                    style={{ marginTop: '10px', fontSize: '15px', color: 'black' }}
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
