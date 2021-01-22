import React from 'react';
import Header from './Header.js';
import MainContent from './MainContent.js';
import Gallery from './Gallery.js';
import TestDriveForm from './TestDriveForm.js';
import Footer from './Footer.js';
import './form.scss';

class Bmw extends React.Component {
    render = () => {
        return (
            <div className="bmw-website">
                <Header name="bmw"/>
                <MainContent />
                <Gallery />
                <TestDriveForm />
                <Footer />
            </div>
        );
    }
}

export default Bmw;