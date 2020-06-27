import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import Header from './Header';
import Footer from './footer';
import Menu from './menu';
import ContextProvider from '../context/context';
import Contents from './content';


function Main(props) {
 
    return (
        <ContextProvider>
        
          <Header/>
           <Menu/>
           <Contents/>
           <Footer/>
        
        </ContextProvider>
 
    );
}

export default Main;