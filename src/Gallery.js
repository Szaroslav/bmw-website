import React from 'react';
import './Gallery.scss';

const Gallery = () => {
    return (
        <section className='bmw-gallery'>
            <div className='bmw-gallery-img-1 gallery-item'>
                <div className='gallery-img'></div>
                {/* <img src='./assets/gallery/bmw-ix-preview-1.jpg' alt='bmw-ix-preview' /> */}
            </div>
            <div className='bmw-gallery-img-2 gallery-item'>
                <div className='gallery-img'></div>
            </div>
            <div className='bmw-gallery-img-3 gallery-item'>
                <div className='gallery-img'></div>
            </div>
            <div className='bmw-gallery-img-4 gallery-item'>
                <div className='gallery-img'></div>
            </div>
            <div className='bmw-gallery-img-5 gallery-item'>
                <div className='gallery-img'></div>
            </div>
        </section>
    );
}

export default Gallery;