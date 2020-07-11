import React, { useEffect, useContext, useState } from 'react';
import { contextData } from '../context/context';

function PriceActions(props) {
    const {coin,setCoin} = useContext(contextData);
    const [totalbuy,setTotalbuy] = useState();
    const [totalsell,setTotalsell] = useState();
    const [buys,setBuys] = useState();
    const [sells,setSells] = useState();
    const [counts,setCounts] = useState();
    useEffect(()=>{
            
     /*     const ws = new WebSocket(`wss://stream.binance.com:9443/ws/mblbtc@trade`);
            ws.onopen=()=>{
                ws.send((JSON.stringify({
                    "method":"SUBSCRIBE",
                    "params": [
                       "mblbtc@trade"
                      ],
                    "id":100
    
                }))) // m : true = sell
            }
      
           ws.onmessage=(evnt)=>{
                console.log((evnt.data))
                 }         */
                
                 const api = `https://api.binance.com/api/v3/trades?symbol=${coin}`;
                 var sell=0;
                 var buy =0;
                 var count=0;
                 var Ltotalsell=0;
                 var Ltotalbuy=0;
                 fetch(api,
                    {type:'cors'
                    }).then((resp)=>resp.json())
                    .then((data)=> {
                        for(var i=0; i< data.length ; i++){
                            if(data[i].quoteQty > .6)
                            {
                               count++;
                               console.log(data[i])
                               if(data[i].isBuyerMaker){
                                    sell++;
                                    Ltotalsell=parseFloat(Ltotalsell+parseFloat(data[i].quoteQty));
                               }
                               else{
                                   buy++;
                                   Ltotalbuy=(Ltotalbuy+parseFloat(data[i].quoteQty));
                               }

                            }
                        }
                        setCounts(count);
                        setBuys(buy);
                        setSells(sell);
                        setTotalbuy(Ltotalbuy);
                        setTotalsell(Ltotalsell);
                        
                        
                    });
    
    },[coin])
    return (
        <div>
          <div className="row">
        <div className="col m-2 d-flex justify-content-center">
            <div className="section-title">
              Price Action Movements
            </div>
        </div>
    </div>

    <div className="row d-flex justify-content-center mt-2 mb-2">
                    <div className="col-md-6 col-sm-12 text-center">
                       Coin : <input  onChange={e=>{setCoin((e.target.value).toUpperCase() + 'BTC')}} type="text" maxLength="5" ></input>
                    </div>
              
                </div>
    <div className="row container">
        <div className="col">
        <div className="row coin-name"><div className=" col text-info font-weight-bolder m-2 coin">  {coin} </div></div>
        <div className="row"><div className="col mb-2 font-weight-bold "> Total Trades :<span> {counts} </span></div></div>
        </div>
    <div className="col">
    <div className="row"><div className="col mb-2 font-weight-bold "> {buys} Buys with {totalbuy}</div></div>
        </div>
        <div className="col">
    <div className="row"><div className="col mb-2 font-weight-bold "> {sells} Sells with {totalsell}</div></div>
        </div>
    </div>
        </div>
    );
}

export default PriceActions;