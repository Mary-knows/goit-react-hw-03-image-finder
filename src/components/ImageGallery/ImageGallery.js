import React from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem'
import './ImageGallery.css';


const ImageGallery = ({ images }) => {
    return <ul className="ImageGallery">
        {images.map(image => (
            <ImageGalleryItem
                key={image.id}
                tags={image.tags}
                webformatURL={image.webformatURL}
                largeImageURL={image.largeImageURL}
            />
        ))}
    </ul>
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default ImageGallery;
