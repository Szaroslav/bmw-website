import React from 'react';
import './Footer.scss';

import { ReactComponent as FacebookLogotype } from './assets/sm/facebook-logotype.svg';
import { ReactComponent as InstagramLogotype } from './assets/sm/instagram-logotype.svg';
import { ReactComponent as YoutubeLogotype } from './assets/sm/youtube-logotype.svg';
import { ReactComponent as LinkedinLogotype } from './assets/sm/linkedin-logotype.svg';
import { ReactComponent as TwitterLogotype } from './assets/sm/twitter-logotype.svg';

const Footer = () => {
    return (
        <footer className='bmw-footer'>
            <div className='bmw-footer__main bmw-fluid-container'>
                <div className='bmw-row bmw-footer__sm'>
                    <h4 className='bmw-text-4'>Dołącz do nas</h4>
                    <ul>
                        <li className='sm-facebook'>
                            <a href='https://www.facebook.com/BMW/' target='_blank' rel='noopener noreferrer'>
                                <FacebookLogotype />
                            </a>
                        </li>
                        <li className='sm-instagram'>
                            <a href='https://www.instagram.com/bmw/?hl=en' target='_blank' rel='noopener noreferrer'>
                                <InstagramLogotype />
                            </a>
                        </li>
                        <li className='sm-youtube'>
                            <a href='https://www.youtube.com/user/BMW' target='_blank' rel='noopener noreferrer'>
                                <YoutubeLogotype />
                            </a>
                        </li>
                        <li className='sm-linkedin'>
                            <a href='https://www.google.com/search?client=firefox-b-d&q=linkedin+bmw' target='_blank' rel='noopener noreferrer'>
                                <LinkedinLogotype />
                            </a>
                        </li>
                        <li className='sm-twitter'>
                            <a href='https://twitter.com/BMW?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target='_blank' rel='noopener noreferrer'>
                                <TwitterLogotype />
                            </a>
                        </li>
                    </ul>
                </div>
                <nav className='bmw-row bmw-footer__nav'>
                    <div>
                        <h4 className='bmw-text-4'>Strefa klienta</h4>
                        <ul>
                            <li><a className='bmw-text-5' href='.'>Centrum Obsługi Klienta BMW</a></li>
                            <li><a className='bmw-text-5' href='.'>Znajdź dealera BMW</a></li>
                            <li><a className='bmw-text-5' href='.'>Pobierz cenniki / broszury</a></li>
                            <li><a className='bmw-text-5' href='.'>Często zadawane pytania</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='bmw-text-4'>Poznaj BMW</h4>
                        <ul>
                            <li><a className='bmw-text-5' href='.'>Informacje prasowe</a></li>
                            <li><a className='bmw-text-5' href='.'>BMW Polska</a></li>
                            <li><a className='bmw-text-5' href='.'>Kariera</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='bmw-text-4'>Informacje prawne</h4>
                        <ul>
                            <li><a className='bmw-text-5' href='.'>Mapa serwisu</a></li>
                            <li><a className='bmw-text-5' href='.'>Nota prawna / Prywatność</a></li>
                            <li><a className='bmw-text-5' href='.'>Polityka cookies</a></li>
                            <li><a className='bmw-text-5' href='.'>Warunki korzystania z MyBMW</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className='bmw-footer__copyright'>
                <div className='bmw-fluid-container'>
                    <p className='bmw-text-6'>&copy; BMW Polska 2020</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;