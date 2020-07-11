import React from 'react';
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Box(props) {
 
    return (
        
        
        <div className="col-md-3 col-sm-6 d-flex  justify-content-center">
        <div className="box-block">
        <div className="block">
            <div className="title">
               {props.coin}
            </div>
    <div>Volume Increased : {props.vchange}</div>
    <div>+ {props.vcp} %</div>
    

        </div>


    </div>
    

    
    
    </div>
    );
}

export default Box;