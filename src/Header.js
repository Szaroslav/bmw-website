import React, { useState } from 'react';
import MobileMenu from './MobileMenu.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import './Header.scss';
import 'swiper/swiper.scss';

import { ReactComponent as BmwLogotype } from './assets/bmw/bmw-logotype.svg';
import { ReactComponent as BmwIxLogotype } from './assets/bmw/bmw-ix-logotype.svg';
import { ReactComponent as MenuIcon } from './assets/icons/menu-ham-icon.svg';

SwiperCore.use([ Pagination, Autoplay ]);

const Header = () => {
    const [ menuActive, setMenuActive ] = useState(false);
    const menuClassName = menuActive ? 'active' : '';

    return (
        <header className='bmw-header'>
            <Swiper 
                className='bmw-slider swiper-no-swiping'
                speed={600}
                pagination={{ el: '.bmw-slider__pagination', clickable: true, renderCustom: (swiper, current, total) => current + 'of' + total }}
                autoplay={{ delay: 8000, disableOnInteraction: false }}
            >
                <div className='bmw-slider__bg-grad'></div>
                <SwiperSlide className='bmw-slider__slide-1' />
                <SwiperSlide className='bmw-slider__slide-2' />
                <SwiperSlide className='bmw-slider__slide-3' />
            </Swiper>
            <MobileMenu className={menuClassName} toggleMenu={() => setMenuActive(!menuActive)} />
            <div className='bmw-fluid-container'>
                <div className='bmw-slider__pagination'></div>
                <div className='bmw-header__top-content'>
                    <nav className='top-content__nav bmw-row'>
                        <ul className='nav__menu'>
                            <li className='menu__item-mobile item-mobile--ham'>
                                <button className='item-mobile__btn' onClick={() => setMenuActive(!menuActive) }>
                                    <MenuIcon className='menu__hamburger' />
                                </button>
                            </li>
                            <li className='menu__item'><a href='.'>Nowe BMW iX</a></li>
                            <li className='menu__item'><a href='.'>Umów jazdę próbną</a></li>
                        </ul>
                        <a className='nav__website-logo' href='.'><BmwLogotype /></a>
                    </nav>
                    <div className='bmw-row'>
                        <p className='bmw-header__slogan'><b>Radość</b> z jazdy</p>
                    </div>
                </div>
                <div className='bmw-header__content'>
                    <div className='content__heading'>
                        <BmwIxLogotype />
                        <h2 className='heading__caption'>NOWE BMW iX</h2>
                        <p className='heading__text'>PIONIER NOWEJ ERY</p>
                    </div>
                    <div className='content__button-wrapper'>
                        <button className='content__td-button bmw-default-btn'>UMÓW JAZDĘ PRÓBNĄ</button>
                    </div>
                </div>
            </div>    
        </header>
    );
}

export default Header;