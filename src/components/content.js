import React, { useContext } from 'react';
import { contextData } from '../context/context';
import TopSuggestions from './topsuggestion';
import VolumeAnalyzerTop from './TopVolume';
import PriceActions from './priceaction';

function Contents(props) {
    const {menu} = useContext(contextData);
    
    return (
        <div>
            {(menu==='topsuggestion') && <TopSuggestions/>}
            {(menu==='volumeanalyzer') && <VolumeAnalyzerTop/>}
            {(menu==='priceaction') && <PriceActions/>}
        </div>
    );
}

export default Contents;