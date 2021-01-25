import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import './Header.scss';
import 'swiper/swiper.scss';

import { ReactComponent as BmwLogotype } from './assets/bmw/bmw-logotype.svg';
import { ReactComponent as BmwIxLogotype } from './assets/bmw/bmw-ix-logotype.svg';

SwiperCore.use([ Pagination, Autoplay ]);

const Header = () => {
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
                <SwiperSlide className='bmw-slider__slide-3' />
                <SwiperSlide className='bmw-slider__slide-2' />
            </Swiper>  
            <div className='bmw-fluid-container'>
                <div className='bmw-slider__pagination'></div>
                <div className='bmw-header__top-content'>
                    <nav className='top-content__nav bmw-row'>
                        <ul className='nav__menu'>
                            <li><a href='#bmw-main-content'>Nowe BMW iX</a></li>
                            <li><a href='#bmw-test-drive-form'>Umów jazdę próbną</a></li>
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