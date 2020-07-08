import React, { useEffect, useState, useContext } from 'react';
import '../styles/style.css';
import { contextData } from '../context/context';

import DisplayBox from './displayBox';
import TopVolumeOverview from './topVolumeOverview';
function VolumeAnalyzerTop(props) {
const {coin,setCoin} = useContext(contextData);
const [timeframe,setTimeFrame] = useState('2h');
const [volumeChange,setVolumeChange] = useState();
const [currentVolume,setCurrentVolume] = useState();
const [currentPrice,setCurrentPrice] = useState();
const [priceChange,setPriceChange] = useState();
const [volumeChangePercentage,setVolumeChangePercenatge] = useState();

    useEffect(()=>{
       
            try {
        var avgWaitPrice=0;
        var totalVolumeBefore=0;
        var currentQuoteVolume=0;
        const endTime = Date.now()-parseInt(timeframe)*60*60*1000;
        const startTime = endTime - 24*60*60*1000;
        const api = `https://api.binance.com/api/v3/klines?symbol=${coin}&interval=30m&startTime=${startTime}&endTime=${endTime}`;
        fetch(api,{
            type:'cors',
        })
        .then((resp)=>resp.json())
        .then((data)=>  
        {
            for(var i=0;i<data.length;i++){
                
                 totalVolumeBefore = totalVolumeBefore + ( parseInt(data[i][5]))
            }
                })
                .then(()=>{
                    fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${coin}`,
                    {
                        type:'cors',
                    })
                    .then((resp=>resp.json())
                    ).then(data=>{
                        
                        avgWaitPrice=(data.weightedAvgPrice);
                        currentQuoteVolume=data.quoteVolume;
                       setCurrentPrice(data.lastPrice);
                       setPriceChange(data.priceChangePercent);
                    }).then(()=>{
                        
                      setVolumeChange((currentQuoteVolume-(totalVolumeBefore*avgWaitPrice)).toFixed(2));
                      setCurrentVolume(parseInt(currentQuoteVolume).toFixed(2));
                      setVolumeChangePercenatge(((currentQuoteVolume-(totalVolumeBefore*avgWaitPrice))/(totalVolumeBefore*avgWaitPrice)*100).toFixed(2))
                    })
                });
            }
             catch (error) {
                console.log("No Coin Found !")
            }
       
        },[coin,timeframe])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col m-2 d-flex justify-content-center">
                        <div className="section-title">
                           Volume Analyzer
                        </div>
                    </div>
                </div>
                <div className="row text-center mt-2 mb-2">
                    <div className="col-md-6 col-sm-12">
                        Enter Coin : <input  onChange={e=>{setCoin((e.target.value).toUpperCase() + 'BTC')}} type="text" maxLength="5" ></input>
                    </div>
                    <div className="col-md-6 cl-sm-12">
                        TimeFrame : <select onChange={e=>{setTimeFrame(e.target.value)}}name="timeframe">
                            <option value="1h">1h</option>
                            <option value="2h">2h</option>
                            <option value="4h">4h</option>
                            
                        </select>
                    </div>
                </div>
               
                <div className="row">
                    <div className="col-12">
                 
 
            <DisplayBox coin={coin} cprice={currentPrice} pricechange={priceChange} volumechange={volumeChange} vchangepercent={Number(volumeChangePercentage)} currentvolume={currentVolume}/>

                    </div>
                </div>
            </div>
            <TopVolumeOverview/>
        </div>
    );
}

export default VolumeAnalyzerTop;