import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');

// props 의 Default 값을 정하지 않았을 시에 작성
// ReactDOM.render( <App headerTitle = "Welcom!"
//                       contentTitle = "Stranger,"
//                       contentBody = "Welcome to example app"/>, rootElement);

ReactDOM.render( 
    <App/>, 
    rootElement 
);