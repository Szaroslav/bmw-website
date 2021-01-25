import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import './Header.scss';
import 'swiper/swiper.scss';

import { ReactComponent as BmwLogotype } from './assets/bmw/bmw-logotype.svg';
import { ReactComponent as BmwIxLogotype } from './assets/bmw/bmw-ix-logotype.svg';

SwiperCore.use([ Pagination, Autoplay ]);

const Header = (props) => {
    return (
        <header className={props.name + '-header'}>
            <Swiper 
                className='swiper-no-swiping'
                speed={600}
                pagination={{ el: '.header-slider-pagination', clickable: true, renderCustom: (swiper, current, total) => current + 'of' + total }}
                autoplay={{ delay: 8000, disableOnInteraction: false }}
            >
                <div className='bmw-header-slider-grad'></div>
                <SwiperSlide />
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Swiper>  
            <div className='bmw-fluid-container'>
                <div className='header-slider-pagination'></div>
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