import React, { useEffect, useState, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { UserBox} from '../../components/Styled/UserBox';

function FriendsProfile({ user }) {
    const { profileImage, nickname } = user;
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

    return (
        <UserBox theme={theme} width="200px" height="240px">
            <div style={{ height: '130px', maxHeight: '130px' }}>
                {profileImage && (
                    <div style={{marginTop: '35%' }}><img src={profileImage} width="100px" height="100px" /></div>
                )}
            </div>
            <p>{nickname}</p>
            {!isRequest ? (
                <button
                    onClick={() => {
                        onRequestHandler();
                    }}
                >
                    💌 친구요청하기
                </button>
            ) : (
                <button
                    onClick={() => {
                        onCancelHandler();
                    }}
                >
                    ❌ 요청취소하기
                </button>
            )}
        </UserBox>
    );
}

export default FriendsProfile;
