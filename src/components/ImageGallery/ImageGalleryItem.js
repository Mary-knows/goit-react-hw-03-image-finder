import React from "react";
import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from '../Modal/Modal';
import './ImageGalleryItem.css'

class ImageGalleryItem extends Component {
    static propTypes = {
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    };

    state = {
        isOpenModal: false,
    };

    openModal = () => {
        this.setState({ isOpenModal: true });
    };

    closeModal = () => {
        this.setState({ isOpenModal: false });
    };
    
    render() {
        const { id, tags, webformatURL, largeImageURL } = this.props;

        return <li className="ImageGalleryItem" key={id} >
            <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} onClick={this.openModal} />
            {this.state.isOpenModal && (
                <Modal
                bigImage={largeImageURL}
                tags={tags}
                isOpen={this.state.isOpenModal}
                onClose={this.closeModal}
            />
            )} 
        </li>

    };
}

export default ImageGalleryItem;