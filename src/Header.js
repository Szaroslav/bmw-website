import React from 'react';
import './Header.scss';

const Header = (props) => {
    return (
        <header className={props.name + "-header"}>
            <img src="./assets/header-slider.jpg" alt="header-slider-1" />
        </header>
    );
}

export default Header;