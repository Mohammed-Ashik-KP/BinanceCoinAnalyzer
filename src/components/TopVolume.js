import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/style.css';

import Box from './Box';
function VolumeAnalyzerTop(props) {

    useEffect(()=>{
       const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusd@trade");
        ws.onopen=()=>{
            ws.send((JSON.stringify({
                "method":"UNSUBSCRIBE",
                "params": [
                    "ethbtc@trade"
                  ],
                "id":1

            })))
        }
           
        
             ws.onmessage=(evnt)=>{
                    console.log(evnt.data)
             }
        },[])
   
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