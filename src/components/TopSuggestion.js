import React, { useEffect } from 'react';
import Box from './Box';


function TopSuggestions(props) {
    
    useEffect(()=>{

       /* const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusd@trade");
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
             }*/
    },[])
    return (
        <div>
          <Box></Box>
        </div>
    );
}

export default TopSuggestions;