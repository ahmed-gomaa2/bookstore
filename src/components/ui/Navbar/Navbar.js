import React, {useEffect} from 'react';
import './Navbar.scss';
import SearchBar from "../SearchBar/SearchBar";

const Navbar = props => {
    useEffect(() => {
        const nav = document.querySelector('.Navbar');
        const dummy = document.querySelector('.Navbar__dummy')
        const stickyNav = (entries, observer) => {
            const [entry] = entries;

            if(!entry.isIntersecting) nav.classList.add('Navbar__sticky');
            else nav.classList.remove('Navbar__sticky');
        }

        const headerObserver = new IntersectionObserver(stickyNav, {
            root: null,
            threshold: 0,
            rootMargin: `200px`
        });

        headerObserver.observe(dummy);
    }, []);
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
