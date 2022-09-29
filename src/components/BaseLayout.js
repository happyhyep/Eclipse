import React, { useEffect, useState } from 'react';
import TopMenu from '../Layout/TopMenu';
import styles from '../assets/styles.module.css';
import { useLocation } from "react-router-dom"
import Background from '../Layout/Backgroud';
import SideMenu from '../Layout/SideMenu';

const BaseLayout = (props) => {

    return (
    <div >
       <TopMenu/>
    </div>
    );
};

export default BaseLayout;