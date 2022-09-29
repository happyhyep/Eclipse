import React from 'react';
import PropTypes from 'prop-types';

import MainBeforeLogin from '../components/Main/MainBeforeLogin';


const Main = () => {

    return (
      <>
        <MainBeforeLogin></MainBeforeLogin>
      </>
    );
};

Main.propsTypes = {
    isLoggedIn: PropTypes.bool,
    setIsLoggedIn: PropTypes.func,
    userObj: PropTypes.bool
};

export default Main;
