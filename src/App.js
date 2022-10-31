import './App.scss';
import {connect} from "react-redux";
import {fetchBooks, fetchRecommended} from "./store/actions/books.action";
import {useEffect} from "react";
import Navbar from "./components/ui/Navbar/Navbar";
import SearchResults from "./components/SearchResults/SearchResults";
import {Routes} from "react-router-dom";

function App(props) {
    useEffect(() => {
        ['gaming', 'food', 'psychology'].map((query, index) => {
            props.fetchRecommended(query);
        });
    }, []);

    return (
        <div className="App">
            <div className="Navbar__dummy"></div>
            <Navbar />
            <SearchResults search={props.search} />
            {props.recommended.map((rec, index) => {
                return <SearchResults search={rec} key={index} />
            })}
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state);
    return {
        msg: state.msg.msg,
        search: state.search.search,
        recommended: state.search.recommended
    }
}

export default connect(mapStateToProps, {fetchBooks, fetchRecommended}) (App);
