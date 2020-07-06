import React from 'react';
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Box(props) {
    return (
        
        
        <div className="d-flex  justify-content-around">
        <div className="box-block">
        <div className="block">
            <div className="title">
               {props.one}
            </div>
    <div className="price">{props.two}</div>
    <div className="volume">{props.three}</div>
    <div className="percenatge">{props.four}</div>

        </div>


    </div>
    

    
    
    </div>
    );
}

export default Box;