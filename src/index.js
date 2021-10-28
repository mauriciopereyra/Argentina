import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test'
import Gallery from './Gallery'
import Banner from './Banner'
import NextMatches from './NextMatches'
import Stats from './Stats'
import Footer from './Footer'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Banner />
    <NextMatches />
    <Stats />
    <Gallery />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
