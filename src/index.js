import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
// import {createStore, applyMiddleware} from 'redux';  
// import { Provider } from "react-redux";
import reviewReducer from "./reducers/ReviewReducer"
import thunk from 'redux-thunk';
import { loadReviews } from "./actions/ReviewAction";

// function configureStore() {
//     return createStore(reviewReducer, applyMiddleware(thunk));
// }
//   const store = configureStore();
//   store.dispatch(loadReviews());

// ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));