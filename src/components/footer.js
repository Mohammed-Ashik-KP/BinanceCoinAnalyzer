import React from 'react';

function Footer(props) {
    return (

            <div className="row d-flex justify-content-center align-content-center" 
            style={{'width':'100%','min-height':'80px', 'background-image':' linear-gradient(to left,#9f24af,rgba(36, 103, 230, 0.856))'}}>
                <div className="col text-white text-center font-weight-bolder ">
                            &copy; Bi_Bot Inc <br/>
                            2020
                </div>
            </div>
        
    );
}

export default Footer;