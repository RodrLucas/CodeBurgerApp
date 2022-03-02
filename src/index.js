import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
// import Home from './pages/Home'
// import Orders from './pages/Orders'
import GlobalStyle from '../src/styles/globalStyles'

ReactDOM.render(
    <>
        <Routes />,
        <GlobalStyle />
    </>,
    document.getElementById('root'));

