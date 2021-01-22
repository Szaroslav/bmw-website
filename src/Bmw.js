import React from 'react';
import Header from './Header.js';
import MainContent from './MainContent.js';
import Gallery from './Gallery.js';
import TestDriveForm from './TestDriveForm.js';

class Bmw extends React.Component {
    render = () => {
        return (
            <div className="bmw-website">
                <Header name="bmw"/>
                <MainContent />
                <Gallery />
                <TestDriveForm />
            </div>
        );
    }
}

export default Bmw;