import React from 'react';
import SuggestionBox from './Suggestionbox';

function TopPriceAction(props) {
    return (
        <div>
            <div className="row mb-2">
                <div className="col">
                    <div className="section-title">
                        Top Price Action Movments
                    </div>
                </div>
            </div>

     <div className="row">
         <div className="col">
         <SuggestionBox title="POEBTC" price="0.00000140" volume="60BTC"/>
         </div>
         <div className="col">
         <SuggestionBox title="POEBTC" price="0.00000140" volume="60BTC"/>
         </div>
     </div>
        </div>
    );
}

export default TopPriceAction;