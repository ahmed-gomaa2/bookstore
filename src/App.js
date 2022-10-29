import './App.css';
import {connect} from "react-redux";

function App(props) {
  return (
    <div className="App">
      {props.msg}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    msg: state.msg.msg
  }
}

export default connect(mapStateToProps) (App);
