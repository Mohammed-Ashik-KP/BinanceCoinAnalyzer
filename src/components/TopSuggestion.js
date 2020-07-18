import React, { useEffect } from 'react';
import Box from './Box';
import coinList from './coinlist';


function TopSuggestions(props) {
    
    useEffect(()=>{

      coinList.forEach((coin,index)=>{
          coin = coin.toLowerCase();
        const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${coin}@trade`);
        ws.onopen=()=>{
            ws.send((JSON.stringify({
                "method":"SUBSCRIBE",
                "params": [
                    `${coin}@trade`
                  ],
                "id":index

            })))
        }
           ws.onmessage=(evnt)=>{
                    console.log((JSON.parse(evnt.data).s),(JSON.parse(evnt.data).p))
             }
      })  
    },[])
    return (
        <div>
          <Box></Box>
        </div>
    );
}

export default TopSuggestions;