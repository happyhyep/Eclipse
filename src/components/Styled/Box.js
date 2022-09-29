import styled from 'styled-components';

export const Box = styled.div`
    width: ${(props) => props.width};
    height: 100px;
    color: rgb(0,0,0);
    font-weight: bold;
    background-color: rgba(230, 230, 230, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
    margin: 10px;
    * {
        color: rgb(39, 39, 39);
        font-weight: bold;
    }
    button {
        color: rgb(230, 230, 230);
    }

`;
