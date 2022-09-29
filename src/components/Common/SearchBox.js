import React from 'react';
import styled, { useTheme } from 'styled-components';

export const SearchBox = ({ onChange, placeholder, onKeyPress, onClick }) => {
    const theme = useTheme();

    return (
        <><div><Input
            placeholder={placeholder}
            theme={theme}
            id="inputvalue"
            type="text"
            onChange={onChange}
            onKeyPress={onKeyPress} />
            <Button className="searchBtn" onClick={onClick}> 🔍 </Button>
            </div></>  
    );
};

const Input = styled.input`
    width: 500px;
    padding: 10px 20px;
    background-color: ${(props) => props.theme.lightBackground || '#2f2f2f'};
    border-radius: 20px;
`;

const Button = styled.button`
    width: 50px;
    padding: 8px 5px;
    background-color: ${(props) => props.theme.lightBackground || '#2f2f2f'};
    border-radius: 20px;
`;
