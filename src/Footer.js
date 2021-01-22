import React from 'react';
import './footer.scss';
import { ReactComponent as FacebookLogotype } from './assets/facebook-logotype.svg';
import { ReactComponent as InstagramLogotype } from './assets/instagram-logotype.svg';
import { ReactComponent as YoutubeLogotype } from './assets/youtube-logotype.svg';
import { ReactComponent as LinkedinLogotype } from './assets/linkedin-logotype.svg';
import { ReactComponent as TwitterLogotype } from './assets/twitter-logotype.svg';

const Footer = () => {
    return (
        <footer className='bmw-footer'>
            <div>
                <h4>Dołącz do nas</h4>
                <ul>
                    <li><FacebookLogotype /></li>
                    <li><InstagramLogotype /></li>
                    <li><YoutubeLogotype /></li>
                    <li><LinkedinLogotype /></li>
                    <li><TwitterLogotype /></li>
                </ul>
            </div>
            <nav>
                <div>
                    <h4>Strefa klienta</h4>
                    <ul>
                        <li>Centrum Obsługi Klienta BMW</li>
                        <li>Znajdź dealera BMW</li>
                        <li>Pobierz cenniki / broszury</li>
                        <li>Często zadawane pytania</li>
                    </ul>
                </div>
                <div>
                    <h4>Poznaj BMW</h4>
                    <ul>
                        <li>Informacje prasowe</li>
                        <li>BMW Polska</li>
                        <li>Kariera</li>
                    </ul>
                </div>
                <div>
                    <h4>Informacje prawne</h4>
                    <ul>
                        <li>Mapa serwisu</li>
                        <li>Nota prawna / Prywatność</li>
                        <li>Polityka cookies</li>
                        <li>Warunki korzystania z MyBMW</li>
                    </ul>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;