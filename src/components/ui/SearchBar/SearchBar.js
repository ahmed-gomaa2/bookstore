import React from 'react';
import './SearchBar.scss';

const SearchBar = props => {
    return (
        <form className={'SearchBar'}>
            <input type={'text'} placeholder={'What do you want read?'} />

        </form>
    );
};

export default SearchBar;
