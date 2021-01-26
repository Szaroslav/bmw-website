import React from 'react';
import Header from './Header.js';
import MobileMenu from './MobileMenu.js';
import MainContent from './MainContent.js';
import Gallery from './Gallery.js';
import TestDriveForm from './TestDriveForm.js';
import Footer from './Footer.js';
import './Bmw.scss';
import './form.scss';

class Bmw extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenuClass: ''
        }

        this.isMobileMenuActive = false;
    }

    render = () => {
        return (
            <div className='bmw-website'>
                {/* <MobileMenu className={this.state.mobileMenuClass} />
                <Header toggleMenu={() => this.toggleMenu()} /> */}
                <Header />
                <MainContent />
                <Gallery />
                <TestDriveForm />
                <Footer />
            </div>
        );
    }

    toggleMenu = () => {
        this.isMobileMenuActive = !this.isMobileMenuActive;

        const cn = this.isMobileMenuActive ? 'active' : '';
        this.setState({ mobileMenuClass: cn });
        console.log(this.state.mobileMenuClass);
    }
}

export default Bmw;