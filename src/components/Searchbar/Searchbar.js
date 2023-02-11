import React from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import './Searchbar.css'


const Searchbar = ({ onSubmit }) => {
    
    const handleSubmit = e => {
        e.preventDefault();
        const querry = e.currentTarget.elements.querry.value;

        if (querry.trim() === '') {
            toast.error('Please, enter a value!');
            e.currentTarget.reset();
            return;
        }
        onSubmit(querry.toLowerCase());
        e.currentTarget.reset();
    };


    return <header className="searchbar">
        <form className="searchForm" onSubmit={e => {handleSubmit(e)}}>
            <button type="submit" className="searchForm-button">
            <span className="searchForm-button-label">Search</span>
            </button>

            <input
                name="querry"
                className="searchForm-input" 
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"/>
        </form>
    </header>      
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;