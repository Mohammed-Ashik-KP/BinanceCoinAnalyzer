import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import Header from './Header';
import TopVolume from './TopVolume';
import TopSuggestion from './TopSuggestion';
import Footer from './footer';
import TopPriceAction from './TopPriceAction';

function Main(props) {
    return (
        <div>
           <Header/>
           <TopSuggestion/>
           <TopPriceAction/>
           <TopVolume/>
           <Footer/>
        </div>
    );
}

export default Main;