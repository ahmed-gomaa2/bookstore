import './App.scss';
import {connect} from "react-redux";
import {fetchBooks} from "./store/actions/books.action";
import {useEffect} from "react";
import Navbar from "./components/ui/Navbar/Navbar";
import SearchResults from "./components/SearchResults/SearchResults";

function App(props) {
  // useEffect(() => {
  //   props.fetchBooks('food');
  // }, []);
  return (
    <div className="App">
        <div className="Navbar__dummy"></div>
      <Navbar />
      <SearchResults />
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    msg: state.msg.msg,
    search: state.search
  }
}

export default connect(mapStateToProps, {fetchBooks}) (App);
