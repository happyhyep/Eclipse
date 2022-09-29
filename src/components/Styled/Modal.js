import styled from 'styled-components';

export const UserProfileModal = styled.div`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
`;
export const ModalButton = styled.div`
    outline: none;
    cursor: pointer;
    border: 0;
`;
export const UserProfileModalSection = styled.div`
    width: 90%;
    max-width: 450px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    animation: modal-show 0.3s;
    overflow: hidden;
`;
export const UserProfileModalHeader = styled.div`
    position: relative;
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: #f1f1f1;
    font-weight: 700;
    text-align: center;
    color: black;
`;
export const UserProfileModalMain = styled.div`
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    height: 100%;
    overflow-y: auto;
`;
export const UserProfileModalFooter = styled.div`
    padding: 16px;
    padding: 12px 16px;
    text-align: center;
`;
export const UserProfileModalHeaderButton = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
`;
export const UserProfileModalOpenModal = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;
    animation: modal-bg-show 0.3s;
`;
export const AlarmModalMain = styled.div`
    height: 400px;
    overflow-y: auto;
    overflow-x: auto;
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
`;
export const AlarmModalSection = styled.div`
    width: 90%;
    max-width: 450px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    animation: modal-show 0.3s;
    overflow: hidden;
`;
