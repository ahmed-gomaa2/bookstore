import React from 'react';
import './SearchBar.scss';
import {connect} from "react-redux";
import {fetchBooks} from "../../../store/actions/books.action";

const SearchBar = props => {
    const [query, setQuery] = React.useState('');

    const formSubmitHandler = e => {
        e.preventDefault();
        props.fetchBooks(query);
    }

    return (
        <form onSubmit={formSubmitHandler}  className={'SearchBar'}>
            <input type={'text'} value={query} onChange={e => setQuery(e.target.value)} placeholder={'What do you want read?'} />
            <button type={'submit'} ><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    );
};

export default connect(null, {fetchBooks}) (SearchBar);
