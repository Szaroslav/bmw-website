import React from 'react';
import List from './List.js';
import './MainContent.scss';
import { ReactComponent as BmwIcon1 } from './assets/bmw/main-content-icon-1.svg';
import { ReactComponent as BmwIcon2 } from './assets/bmw/main-content-icon-2.svg';

const MainContent = () => {
    const listData = [
        "Ponad 600 km zasięgu *",
        "Elektryczny napęd na wszystkie koła z dwiema osiami napędzanymi elektrycznie i ponad 500 KM (370 kW) *",
        "Od 0 do 100 km / h w mniej niż 5 sekund *",
        "Ładowanie 120 km w 10 minut *",
        "Publiczne szybkie ładowanie od 10 do 80% w mniej niż 40 minut"
    ];

    return (
        <main id='bmw-main-content' className='bmw-main-content'>
                <section className='main-content-section-1 bmw-fluid-container irregular-right'>
                    <div className='bmw-row' style={{ alignSelf: 'end' }}>
                        <img src='./assets/bmw-ix-preview-1.jpg' alt='bmw-ix-preview' style={{ marginTop: '0' }} />
                    </div>
                    <div className='bmw-row' style={{ paddingLeft: '16px' }}>
                        <img src='./assets/bmw-ix-preview-2.jpg' alt='bmw-ix-preview' />
                    </div>
                    <div className='bmw-row content' style={{ paddingLeft: '8%' }}>
                        <BmwIcon1 />
                        <h3>FAKTY O NOWYM BMW iX.</h3>
                        <List data={listData} />
                    </div>
                </section>
                <section className='main-content-section-2 bmw-fluid-container irregular-left'> 
                    <div className='bmw-row content' style={{ paddingRight: '8%' }}>
                        <BmwIcon2 />
                        <h3>INNOWACYJNA AERODYNAMIKA BMW iX.</h3>
                        <p>
                            BMW iX w każdym milimetrze swojej dynamicznej stylistyki wdraża zasadę „forma podąża za funkcją”.
                        </p>
                        <p>
                            Widać to przede wszystkim po gładkiej karoserii ze zwężoną nadbudową kabiny i zredukowanymi fugami 
                            oraz po płaskim podwoziu. W połączeniu z zamkniętym przodem oraz dyfuzorem z tyłu i niezwykłymi detalami, 
                            takimi jak wpuszczane klamki czy zintegrowane z listwami szybowymi lusterka zewnętrzne, BMW iX osiąga 
                            doskonały współczynnik Cx wynoszący zaledwie 0,25. Dzięki temu łączy w sobie zasięg i wydajność 
                            z innowacyjną konstrukcją SAV-a.
                        </p>
                    </div>
                    <div className='bmw-row' style={{ paddingRight: '16px' }}>
                        <img src='./assets/bmw-ix-preview-3.jpg' alt='bmw-ix-preview' />
                    </div>
                    <div className='bmw-row' style={{ alignSelf: 'baseline' }}>
                        <img src='./assets/bmw-ix-preview-4.jpg' alt='bmw-ix-preview' />
                    </div>
                </section>      
        </main>
    );
}

export default MainContent;