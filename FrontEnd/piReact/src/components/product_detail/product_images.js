import React from 'react';
import { RiHeartLine } from 'react-icons/ri';
import { IoShareSocialOutline } from 'react-icons/io5';
import ImageGallery from 'react-image-gallery';

const Images = ({ setOpenGallery, product }) => {

    const bigImgBg = { 
        backgroundImage: `url(${product.images[0].url})`
    }

    return (
        <>
            <div className='reactions'>
                <IoShareSocialOutline className='icons' />
                <RiHeartLine className='icons' />
            </div>

            <div className='imgsResponsive'>
                <ImageGallery
                    items={product.images.map( function (image) {
                        return(         
                            {
                                original: image.url,
                                thumbnail: image.url
                            }            
                        )})}
                    showIndex={true}
                    showPlayButton={false}
                    showThumbnails={false}
                    showNav={false}
                    slideInterval={3000}
                    autoPlay={true}
                    showFullscreenButton={false}
                />
            </div>

            <section className='container_imgs'>
                <div className='big_img'>
                    <div style={{backgroundImage: `url(${product.images[0].url})`}} alt="Selected" className="selected"></div>
                </div>
                <div className='little_imgs'>

                    <div style={{backgroundImage: `url(${product.images[1].url})`}} className='imgL'></div>
                    <div style={{backgroundImage: `url(${product.images[2].url})`}} className='imgL'></div>
                    <div style={{backgroundImage: `url(${product.images[3].url})`}} className='imgL'></div>
                    <div style={{backgroundImage: `url(${product.images[4].url})`}} className='imgL'></div>

                    <a href='' onClick={(e) => {
                        e.preventDefault();
                        setOpenGallery(true)
                    }} >Ver más</a>
                </div>
            </section>

        </>
    );
}

export default Images;
