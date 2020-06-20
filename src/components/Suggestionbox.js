import React from 'react';
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function SuggestionBox(props) {
    return (
        
        
        <div className="d-flex  justify-content-around">
        <div className="box-block">
        <div className="block">
            <div className="title">
               {props.title}
            </div>
    <div className="price">{props.price}</div>
    <div className="volume">{props.volume}</div>

        </div>


    </div>
    

    
    
    </div>
    );
}

export default SuggestionBox;