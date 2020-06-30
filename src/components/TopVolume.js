import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/style.css';

import Box from './Box';
function VolumeAnalyzerTop(props) {
const [coinpair,setCoinPair] = useState('ETHBTC');
const [timeframe,setTimeFrame] = useState('4h');
    useEffect(()=>{
        var avgWaitPrice=0;
        var totalVolumeBefore=0;
        var currentQuoteVolume=0;
        const endTime = Date.now()- parseInt(timeframe)*60*60*1000;
        const startTime = endTime - 24*60*60*1000;
        const api = `https://api.binance.com/api/v3/klines?symbol=${coinpair}&interval=${timeframe}&startTime=${startTime}&endTime=${endTime}`;
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
                    fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${coinpair}`,
                    {
                        type:'cors',
                    })
                    .then((resp=>resp.json())
                    ).then(data=>{
                        
                        avgWaitPrice=(data.weightedAvgPrice);
                        currentQuoteVolume=data.quoteVolume;
                       
                    }).then(()=>{
                        console.log(totalVolumeBefore*avgWaitPrice);
                        console.log(currentQuoteVolume-(totalVolumeBefore*avgWaitPrice))
                    })
                })
           

            
   
        },[coinpair,timeframe])

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
                        Enter Coin : <input onChange={e=>{setCoinPair((e.target.value).toUpperCase() + 'BTC')}} type="text"></input>
                    </div>
                    <div className="col-md-6 cl-sm-12">
                        TimeFrame : <select onChange={e=>{setTimeFrame(e.target.value)}}name="timeframe">
                            <option value="1">1h</option>
                            <option value="2">2h</option>
                            <option value="4">4h</option>
                            <option value="24">1d</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <Carousel>
  <Carousel.Item>
            <Box title1='BTCUSD' amount1="10 BTC" change1="6%"/>

  </Carousel.Item>

  <Carousel.Item>
  <Box title1='ETHBTC' amount1="65 BTC" change1="32%"/>
  </Carousel.Item>
 
</Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VolumeAnalyzerTop;