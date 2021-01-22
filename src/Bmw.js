import React from 'react';
import Header from './Header.js';
import DescSection from './DescSection.js';

class Bmw extends React.Component {
    render = () => {
        return (
            <div className="bmw-website">
                <Header name="bmw"/>
                <main>
                    <DescSection contentPos='right' />
                    <DescSection contentPos='left' />
                </main>
            </div>
        );
    }
}

export default Bmw;