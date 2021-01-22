import React from 'react';
import Header from './Header.js';
import MainContent from './MainContent.js';
import Gallery from './Gallery.js';

class Bmw extends React.Component {
    render = () => {
        return (
            <div className="bmw-website">
                <Header name="bmw"/>
                <MainContent />
                <Gallery />
            </div>
        );
    }
}

export default Bmw;