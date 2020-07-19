import React, { useEffect, useContext, useState } from 'react';
import { contextData } from '../context/context';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'


function PriceActions(props) {
    const {coin,setCoin} = useContext(contextData);
    const [totalbuy,setTotalbuy] = useState();
    const [totalsell,setTotalsell] = useState();
    const [buys,setBuys] = useState();
    const [sells,setSells] = useState();
    const [counts,setCounts] = useState();
   const [st,setST] = useState();
   const [et,setET] = useState();
   const [avgTradesS,setAvgTrades] =useState();
   const [recentAvgTrades,setRecentAvgTrades] = useState();




   // const question_icon = <FontAwesomeIcon icon={faQuestionCircle} />
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
                 var time=[];
                 fetch(api,
                    {type:'cors'
                    }).then((resp)=>resp.json())
                    .then((data)=> {
                        for(var i=0; i< data.length ; i++){
                            if(data[i].quoteQty > .5)
                            {
                               count++;
                               time.push(data[i].time);
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
                        if(count>0)
                        {
                        time.sort();
                        var len = (time.length);
                        setST((new Date(time[0]).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })));
                        

                        setET((new Date(time[len-1]).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })));
                     
                     }
                        setCounts(count);
                        setBuys(buy);
                        setSells(sell);
                        setTotalbuy((Ltotalbuy).toFixed(3));
                        setTotalsell((Ltotalsell).toFixed(3));
                        
                        
                    });
                    //const endTime = Date.now()-parseInt(timeframe)*60*60*1000;
        const startTime = Date.now() - 24*60*60*1000;
        const endTime = Date.now() - 30*60*1000;
       const recentStartTime = Date.now() - 30*60*1000;
       const recentEndTime = Date.now() - 15*60*1000;
       var tradeCount=0;
       var totalTrades=0;
       var recentTotalTrades=0;
       var avgTrades=0;

        fetch(`https://api.binance.com/api/v3/klines?symbol=${coin}&interval=15m&startTime=${startTime}&endTime=${endTime}`,{
            type:'cors',
        }).then((resp)=>resp.json()
        .then((data)=>{
            for(var i=0;i<data.length;i++)
            {
            totalTrades=totalTrades+data[i][8];
            tradeCount++;
            }
        })).then(()=>{ 
            fetch(`https://api.binance.com/api/v3/klines?symbol=${coin}&interval=5m&startTime=${recentStartTime}&endTime=${recentEndTime}`,{
            type:'cors',
        }).then((resp)=>resp.json()
        .then((data)=>{
            for(var i=0;i<data.length;i++)
            {
            recentTotalTrades=recentTotalTrades+data[i][8];

            }
        })).then(()=>{
            avgTrades = (Math.ceil(totalTrades/tradeCount));
            setAvgTrades(avgTrades);
            setRecentAvgTrades(recentTotalTrades);
        
           
        })

      
    })
    
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
                      <input placeholder="Coin Name"  onChange={e=>{setCoin((e.target.value).toUpperCase() + 'BTC')}} type="text" maxLength="5" ></input>
                    </div>
              
                </div>
               

            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4 col-sm-12 text-center">
                       <div className="coin text-danger font-weight-bolder"> {coin}</div>
                        <div className="row">
    <div className="col text-dark"> Total <span className="font-weight-bold">{counts}</span> Trades Detected</div>
                        </div>
                </div>
    <div className="col-md-3 col-sm-12 text-center text-dark font-weight-bold m-2">
         <span className="text-success">{buys} Buys </span> Worth <span className="text-success">{totalbuy}</span> BTC</div>
    <div className="col-md-3 col-sm-12 text-center text-dark font-weight-bold m-2">
         <span className="text-danger">{sells} Sells </span> Worth <span className="text-danger">{totalsell} </span> BTC  </div>      
            </div>
    <div className="row text-center m-3">
        <div className="col-12 text-center text-secondary">
        These Trades Has Been Happened Between <span className="text-dark font-weight-bold">{st} </span>  and  <span className="text-dark font-weight-bold">{et} </span>
    </div>
    </div>
        <div className="row d-flex justify-content-around m-3">
            <div className="col text-center d-flex justify-content-around">
                <div className="trade-box">
                <div className="text-info font-weight-bold">Avg Trades / 15 Min</div>
            <div className="text-dark font-weight-bolder">{avgTradesS}</div>
            </div>
            </div>
            <div className="col text-center d-flex justify-content-around">
            <div className="trade-box align-items-center">
                <div className="text-info font-weight-bold">Last 15 Min Trades</div>
            <div className="text-dark font-weight-bolder">{recentAvgTrades}</div>
            </div>
          </div>
        </div>
        </div>
    );
}

export default PriceActions;