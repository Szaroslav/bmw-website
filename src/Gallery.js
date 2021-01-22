import React from 'react';
import './Gallery.scss';

const Gallery = () => {
    return (
        <section className='bmw-gallery'>
            <img src='./assets/gallery/bmw-ix-preview-1.jpg' alt='bmw-ix-preview' />
            <img src='./assets/gallery/bmw-ix-preview-2.jpg' alt='bmw-ix-preview' />
            <img src='./assets/gallery/bmw-ix-preview-3.jpg' alt='bmw-ix-preview' />
            <img src='./assets/gallery/bmw-ix-preview-4.jpg' alt='bmw-ix-preview' />
            <img src='./assets/gallery/bmw-ix-preview-5.jpg' alt='bmw-ix-preview' />
        </section>
    );
}

export default Gallery;