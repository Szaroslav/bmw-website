import React from 'react';
import './Header.scss';
import { ReactComponent as BmwLogotype } from './assets/bmw-logotype.svg';

const Header = (props) => {
    return (
        <header className={props.name + '-header'}>
            <div className={props.name + '-header-slider'}>
                <img src='./assets/header-slider.jpg' alt='header-slider-1' />
                <div className='bmw-header-slider-btn-ctn'>
                    <button className='bmw-header-slider-btn'></button>
                    <button className='bmw-header-slider-btn'></button>
                    <button className='bmw-header-slider-btn'></button>
                </div>
            </div>
            <div className='bmw-header-top-content'>
                <nav className={props.name + '-header-nav bmw-row'}>
                    <ul>
                        <li>Nowe BMW iX</li>
                        <li>Umów jazdę próbną</li>
                    </ul>
                    <BmwLogotype />
                </nav>
                <div className='bmw-row'>
                    <div>
                        <p>Radość z jazdy</p>
                    </div>
                </div>
            </div>
            <div className={props.name + '-header-content'}>
                <h2>NOWE BMW iX</h2>
                <p>PIONIER NOWEJ ERY</p>
                <button className='bmw-default-btn'>UMÓW JAZDĘ PRÓBNĄ</button>
            </div>
        </header>
    );
}

export default Header;