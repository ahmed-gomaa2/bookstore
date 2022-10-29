import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";

export default reducer => createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
