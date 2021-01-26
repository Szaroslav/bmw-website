import React from 'react';
import './MobileMenu.scss';
import { ReactComponent as BmwLogotype } from '../assets/bmw/bmw-logotype.svg';
import { ReactComponent as CloseIcon } from '../assets/icons/close-icon.svg';

const MobileMenu = ({ className, toggleMenu }) => {
    const cn = className !== '' ? `mobile-nav ${className}` : 'mobile-nav';
    
    return (
        <nav className={cn}>
            <div className='bmw-fluid-container'>
                <div className='mobile-nav__top-content'>
                    <div className='top-content__line-container'>
                        <div className='line-container__line' />
                    </div>
                    <div className='top-content__side-container'>
                        <a className='side-container__website-logo' href='.'><BmwLogotype /></a>
                        <button className='side-container__close-btn' onClick={() => toggleMenu()}>
                            <CloseIcon className='close-btn__icon' />
                        </button>
                    </div>
                    
                </div>
                <ul className='mobile-nav__menu'>
                    <li className='menu__item'><a href='.'>NOWE BMW iX</a></li>
                    <li className='menu__item'><a href='.'>INNOWACYJNA AERODYNAMIKA</a></li>
                    <li className='menu__item'><a href='.'>GALERIA</a></li>
                </ul>
                <div className='content__button-wrapper'>
                    <button className='content__td-button bmw-default-btn'>UMÓW JAZDĘ PRÓBNĄ</button>
                </div>
            </div>
        </nav>
    );
}

export default MobileMenu;