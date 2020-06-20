import React from 'react';
import '../styles/style.css'
function Header(props) {
    return (
       <> <div>
            <div className="navigation">
                <div className="nav-links">
                    <div className="brand">Bi Bot V1</div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="text-success mt-3 font-weight-bold text-center">
                    Smart Suggestion For Smart Trades !
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;