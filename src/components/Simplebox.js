import React from 'react';
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Simplebox(props) {
    return (
        <div className="d-flex  justify-content-around">
        <div className="box-block">
        <div className="block">
            <div className="title">
               {props.title1}
            </div>
           <p>
               <div className="change">
                    {props.amount1} / {props.change1}
            </div>
        </p>
        </div>


    </div>
    

    <div className="box-block">
        <div className="block">
            <div className="title">
               {props.title1}
            </div>
           <p>
               <div className="change">
                    {props.amount1} / {props.change1}
            </div>
        </p>
        </div>


    </div>
    
    </div>
    );
}

export default Simplebox;