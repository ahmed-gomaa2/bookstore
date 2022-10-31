import React from 'react';
import './Book.scss';

const Book = props => {

    const getOnlyFiftyWords = text => {
        // return text;
        if(text.length <= 50) return text;
        const textArray = text.split(' ');
        textArray.splice(50);
        return textArray.join(' ').concat('....');
    }

    return (
        <div className={'Book'}>
            <div className="Book__thumbnail">
                <img src={props.book?.volumeInfo?.imageLinks?.thumbnail} alt="cover image"/>
            </div>
            <div className="Book__info--container">
                <div className="Book__header">
                    <h3>{props.book?.volumeInfo?.title}</h3>
                    <p >{props.book?.volumeInfo?.authors?.map((author, i) => (
                        <span key={i}>{author}, </span>
                    ))}</p>
                </div>
                <div className="Book__info">
                    <p>{getOnlyFiftyWords(props.book.volumeInfo.description || '')}</p>
                </div>
                <div className="Book__burger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Book;
