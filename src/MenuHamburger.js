import React, { useState } from 'react';
import './MenuHamburger.scss';

const MenuHamburger = ({ onClick }) => {
    const [ active, setActive ] = useState(false);
    const activeClassName = active ? ' active' : '';

    return (
        <div className={'menu-hamburger' + activeClassName} onClick={() => { setActive(!active); onClick(); }}>
            <div className='menu-hamburger__line'></div>
            <div className='menu-hamburger__line'></div>
            <div className='menu-hamburger__line'></div>
        </div>
    );
}

export default MenuHamburger;