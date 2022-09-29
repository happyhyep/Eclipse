import React from 'react';
import { Link } from 'react-router-dom';

const menuList = [
    { ref: '', label: '🏠　홈' },
    { ref: 'schedule', label: ' 1. 시간표 어쩌고'},
    { ref: 'b', label: ' 2. 납치 어쩌고'},
    { ref: 'c', label: ' 3. 후원 어쩌고'},
];

const SideMenu = () => {
    return (
        <div className="SideMenu">
            {menuList.map(({ label, ref }) => (
                <Link key={ref} to={ref}>
                    <div>  
                    <button>{label}</button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default SideMenu;
