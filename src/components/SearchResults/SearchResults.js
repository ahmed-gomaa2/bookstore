import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import Book from "./Book/Book";
import './SearchResults.scss';


const BOOKS_PER_PAGE = 10;

const SearchResults = props => {
    const [search, setSearch] = useState({});
    const [page, setPage] = useState(1);

    const getTheCurrentPageBooks = () => {
        const start = (page - 1) * BOOKS_PER_PAGE;
        const end = page * BOOKS_PER_PAGE;
        console.log(search.books?.slice(start, end))
        return search.books?.slice(start, end);
    }

    const backBtnClickHandler = curPage => {
        setPage(page - 1);
    }


    const renderPaginationHandler = () => {
        const currentPage = page;
        const numPages = Math.ceil(
            search.books?.length / BOOKS_PER_PAGE
        );
        let numsPageResults = [];

        for(let i = 1; i <= numPages; i++) {
            numsPageResults.push(i);
        }

        console.log(currentPage, numPages);
        if(search.books?.length > 0) {
            return <div className={'SearchResults__btns'}>
                <button onClick={e => backBtnClickHandler(currentPage)} className={`SearchResults__back`} disabled={currentPage === 1}><i className="fa-solid fa-chevron-left"></i></button>
                {numsPageResults.map((num, i) => {
                    return <button key={i} onClick={e => setPage(num)} className={`SearchResults__page ${currentPage === num && 'SearchResults__page--active'}`}>{num}</button>
                })}
                <button onClick={e => setPage(page + 1)} disabled={currentPage === numPages} className={'SearchResults__next'}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        }
    }

    useEffect(() => {
        setSearch(props.search);
    }, [props.search]);
    return (
        <div className={'SearchResults'}>
            <div className="SearchResults__header">
                <h2>{search.query && search.query}</h2>
            </div>
            {(search.query && !search.books) ? (
                <div><i style={{color: 'red', marginRight: '10px'}} className="fa-solid fa-triangle-exclamation"></i>Try again with another keyword!</div>
            ): (
                <div className="SearchResults__books">
                    {getTheCurrentPageBooks()?.map((book, index) => {
                        return <Book book={book} key={index} index={index} />
                    })}
                </div>
            )}
            <div className="SearchResults__pagination">
                {renderPaginationHandler()}
            </div>
        </div>
    );
};

export default SearchResults;
