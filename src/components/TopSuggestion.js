import React from 'react';
import SuggestionBox from './Suggestionbox';

function TopSuggestion(props) {
    return (
        <div>
             <div className="container">
                <div className="row">
                    <div className="col m-2 d-flex justify-content-center">
                        <div className="section-title">
                            Top Suggestion
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <SuggestionBox title="BNBBTC" price="0.00457989" volume="352 BTC"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopSuggestion;