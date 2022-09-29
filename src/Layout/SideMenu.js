import React from 'react';
import { Link } from 'react-router-dom';

const menuList = [
    { ref: '', label: '🏠　홈' },

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
