import React from 'react';
import burderLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => {   
    return (
       <div className={classes.Logo}>
           <img src={burderLogo} alt="MyBurger" />
       </div>
    );
};

export default logo;