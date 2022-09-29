import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import '98.css';

const TopMenu = () => {

    return (
      <div className="window" style={{width: "100%"}}>
        <div className="title-bar" style={{height: "30px"}}>
                <div className="title-bar-text" style={{fontSize: "20px"}}>2022 Khuthon</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
            </div>
        </div>
        </div>  
    )
};

export default TopMenu;