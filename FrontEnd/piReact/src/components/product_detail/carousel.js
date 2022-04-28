import React from 'react';
import '../../styles/product_detail/carousel.css';
import ImageGallery from 'react-image-gallery';


const CarouselMain = ({ setOpenGallery, product }) => {

    const arrayImages = [
        {
            original: product.images[0].url,
            thumbnail: product.images[0].url
        },
        {
            original: product.images[1].url,
            thumbnail: product.images[1].url,
        },
        {
            original: product.images[2].url,
            thumbnail: product.images[2].url
        },
        {
            original: product.images[3].url,
            thumbnail: product.images[3].url
        },
        {
            original: product.images[4].url,
            thumbnail: product.images[4].url
        }
    ]


    return (
        <div className='carousel-container'>
            <div className='carousel-background'></div>
            <div className='carousel'>

                <div className='closeGallery' onClick={() => setOpenGallery(false)}>
                    <p className='closeP'>X</p>
                </div>

                <ImageGallery
                    items=
                    {arrayImages}
                    showIndex={true}
                    slideInterval={3000}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    showThumbnails={true}
                    showNav={false}
                    autoPlay={true}
                />
            </div>
        </div>
    );
}

export default CarouselMain;
