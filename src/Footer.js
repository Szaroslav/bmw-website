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
            <div className='bmw-fluid-container'>
                <div className='bmw-row footer-sm'>
                    <h4>Dołącz do nas</h4>
                    <ul>
                        <li><FacebookLogotype /></li>
                        <li><InstagramLogotype /></li>
                        <li><YoutubeLogotype /></li>
                        <li><LinkedinLogotype /></li>
                        <li><TwitterLogotype /></li>
                    </ul>
                </div>
                <nav className='bmw-row footer-navigation'>
                    <div>
                        <h4>Strefa klienta</h4>
                        <ul>
                            <li><a href='.'>Centrum Obsługi Klienta BMW</a></li>
                            <li><a href='.'>Znajdź dealera BMW</a></li>
                            <li><a href='.'>Pobierz cenniki / broszury</a></li>
                            <li><a href='.'>Często zadawane pytania</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Poznaj BMW</h4>
                        <ul>
                            <li><a href='.'>Informacje prasowe</a></li>
                            <li><a href='.'>BMW Polska</a></li>
                            <li><a href='.'>Kariera</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Informacje prawne</h4>
                        <ul>
                            <li><a href='.'>Mapa serwisu</a></li>
                            <li><a href='.'>Nota prawna / Prywatność</a></li>
                            <li><a href='.'>Polityka cookies</a></li>
                            <li><a href='.'>Warunki korzystania z MyBMW</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className='footer-copyright'>
                <div className='bmw-fluid-container'>
                    <p>&copy; BMW Polska 2020</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;