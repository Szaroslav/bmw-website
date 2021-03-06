import React from 'react';
import Header from './Header/Header.js';
import MainContent from './MainContent/MainContent.js';
import Gallery from './Gallery/Gallery.js';
import TestDriveForm from './TestDriveForm/TestDriveForm.js';
import Footer from './Footer/Footer.js';
import ScrollAnimation from 'react-animate-on-scroll';
import './Bmw.scss';
import './form.scss';
import 'animate.css/animate.compat.css';

class Bmw extends React.Component {
    constructor(props) {
        super(props);

        this.components = [
            <Header />,
            <MainContent />,
            <Gallery  />,
            <TestDriveForm />,
            <Footer />
        ];
    }

    render = () => {
        return (
            <div className='bmw-website'>
                {this.components.map((v, i) => {
                    return (
                        <ScrollAnimation key={i} animateIn='fadeIn' animateOnce={true} className={`bmw-website__${i + 1}`}>
                            {v}
                        </ScrollAnimation>
                    );
                })}           
            </div>
        );
    }
}

export default Bmw;