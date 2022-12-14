import React from 'react';
import { Link } from 'react-router-dom';

const menuList = [
    { ref: '', label: 'π γν' },
    { ref: 'schedule', label: ' 1. μκ°ν μ΄μ©κ³ '},
    { ref: 'b', label: ' 2. λ©μΉ μ΄μ©κ³ '},
    { ref: 'c', label: ' 3. νμ μ΄μ©κ³ '},
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
