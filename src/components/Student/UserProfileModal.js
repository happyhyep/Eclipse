import React from 'react';
import { Form } from 'react-router-dom';
import {
    UserProfileModalHeaderButton,
    UserProfileModalFooter,
    UserProfileModalHeader,
    UserProfileModalMain,
    UserProfileModalSection,
    UserProfileModalOpenModal,}
    from '../Styled/Modal';

const UserProfileModal = (props, { user }) => {
    const { open, close, header } = props;
    

    return (
        <div
            style={{
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                animation: 'modal-bg-show 0.3s',
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
                        {props.children}
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
