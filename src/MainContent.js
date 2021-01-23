import React from 'react';

const MainContent = () => {
    return (
        <main id='bmw-main-content'>
            <section>
                <div>
                    <img src='./assets/bmw-ix-preview-1.jpg' alt='bmw-ix-preview'></img>
                    <img src='./assets/bmw-ix-preview-2.jpg' alt='bmw-ix-preview'></img>
                </div>
                <div>
                    <h3>FAKTY O NOWYM BMW iX.</h3>
                </div>
            </section>
            <section>
                <div>
                    <img src='./assets/bmw-ix-preview-3.jpg' alt='bmw-ix-preview'></img>
                    <img src='./assets/bmw-ix-preview-4.jpg' alt='bmw-ix-preview'></img>
                </div>
                <div>
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
            </section>
        </main>
    );
}

export default MainContent;