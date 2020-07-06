import React, { useEffect } from 'react';
import Box from './Box';


function TopSuggestions(props) {
    
    useEffect(()=>{

        const ws = new WebSocket("wss://stream.binance.com:9443/ws/ethbtc@trade");
        ws.onopen=()=>{
            ws.send((JSON.stringify({
                "method":"UNSUBSCRIBE",
                "params": [
                    "ethbtc@trade"
                  ],
                "id":13

            })))
        }
           ws.onmessage=(evnt)=>{
                    console.log(JSON.parse(evnt.data).s )

             }
    },[])
    return (
        <div>
          <Box></Box>
        </div>
    );
}

export default TopSuggestions;