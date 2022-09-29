import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Box } from '../Styled/Box';
import { getTest } from '../../store/axiosTest';

const MainPage = () => {
    const [editMode, setEditMode] = useState(false);


    return (
        <div>
            <h1>
                <a style={{ color: 'white', fontSize: 'min(6vw, 40px)' }}>
                    대충 배경
                </a>
            </h1>
                <div
                    style={{
                        display: 'flex',

                        gap: '0.5em',
                        alignItems: 'center',
                        marginTop: '20px',
                        justifyContent: 'flex-end',
                    }}
                >
                </div>
            <div style={{position: 'fixed', bottom:'0', width: '100%', fontSize: '20px'}}>
            <Box>
                어떤 서비스를 이용할거니?
                <div>
                    <div><button style={{color: 'black', fontSize: '15px'}}>1. 시간표 어쩌고</button></div>
                    <div><button style={{color: 'black', fontSize: '15px'}}>2. 납치 어쩌고</button></div>
                    <div><button style={{color: 'black', fontSize: '15px'}}>3. 후원 어쩌고</button></div>
                </div>
                </Box>
            </div>
        </div>
    );
};

export default MainPage;
