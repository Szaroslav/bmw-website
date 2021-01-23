import React from 'react';
import './Header.scss';
import { ReactComponent as BmwLogotype } from './assets/bmw/bmw-logotype.svg';
import { ReactComponent as BmwIxLogotype } from './assets/bmw/bmw-ix-logotype.svg';

const Header = (props) => {
    return (
        <header className={props.name + '-header'}>
            <div className='bmw-header-wrapper'>
                <div className={props.name + '-header-slider'}>
                    <div className='bmw-header-slider-grad'></div>
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
                            <li><a href='#bmw-main-content'>Nowe BMW iX</a></li>
                            <li><a href='#bmw-test-drive-form'>Umów jazdę próbną</a></li>
                        </ul>
                        <a href='.'><BmwLogotype /></a>
                    </nav>
                    <div className='bmw-row'>
                        <p className='bmw-paragraph'><b>Radość</b> z jazdy</p>
                    </div>
                </div>
                <div className={props.name + '-header-content'}>
                    <div className='bmw-header-heading'>
                        <BmwIxLogotype />
                        <h2>NOWE BMW iX</h2>
                        <p>PIONIER NOWEJ ERY</p>
                    </div>
                    <div className='bmw-header-button-wrapper'>
                        <button className='bmw-default-btn'>UMÓW JAZDĘ PRÓBNĄ</button>
                    </div>
                </div>
            </div>    
        </header>
    );
}

export default Header;