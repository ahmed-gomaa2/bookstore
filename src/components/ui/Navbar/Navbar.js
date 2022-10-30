import React from 'react';
import './Navbar.scss';
import SearchBar from "../SearchBar/SearchBar";

const Navbar = props => {
    return (
        <div className={'Navbar'}>
            <div className="Navbar__logo">
                <div className="Navbar__logo--icon">
                    <i className="fa-solid fa-glasses"></i>
                </div>
                <div className="Navbar__logo--header">
                    <h1>Eqraa</h1>
                </div>
            </div>
            <SearchBar />
        </div>
    );
};

export default Navbar;
