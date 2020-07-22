import React, { useEffect, useState } from 'react';
import coinList from './coinlist'
import Singlebox from './Singlebox';
function TopVolumeOverview(props) {
    const [timeframe,setTimeframe] = useState('30m');
 const [topdata,setTopData]=useState([]);
    useEffect(()=>{
        
      getData();
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },[timeframe])
   let finalData =[];
    const getData= ()=>{
        let endTime,startTime=0;
       if(timeframe==='15m' || timeframe==='30m'){
         endTime = Date.now()-parseInt(timeframe)*60*1000;
            startTime = endTime - 24*60*60*1000 ;
       } 
       else{
            endTime = Date.now()-parseInt(timeframe)*60*60*1000;
            startTime = endTime - 24*60*60*1000;
       }
       
        var topcoin=[];
        var topVolumeChange=[];
       var topVolumeChangePercent=[];
    
    
       coinList.forEach((coin,index)=>{
        var avgWaitPrice=0;
        var totalVolumeBefore=0;
        var currentQuoteVolume=0;
        var vchange=0;
        var vchangep=0;
 

        fetch(`https://api.binance.com/api/v3/klines?symbol=${coin}&interval=5m&startTime=${startTime}&endTime=${endTime}`,{
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
                       
                    })
                    
                    .then(()=>{
                   
                      vchange=((currentQuoteVolume-(totalVolumeBefore*avgWaitPrice)).toFixed(2));
                     currentQuoteVolume=(parseInt(currentQuoteVolume).toFixed(2));
                      vchangep=(((currentQuoteVolume-(totalVolumeBefore*avgWaitPrice))/(totalVolumeBefore*avgWaitPrice)*100).toFixed(2));
                   
                    }).then(()=>{
                        
                        if(vchange>10){
                            topcoin.push(coin);
                            topVolumeChange.push(vchange);
                            topVolumeChangePercent.push(vchangep);
                        }
                    }).then(()=>{
                        
                        var result = [];
                        topcoin.forEach((key, i) =>
                         {
                            result.push(
                                {"c" : key, "vchange" : parseFloat(topVolumeChange[i]) , "vcp":topVolumeChangePercent[i] }
                            )
                        });
                       finalData = result.sort((a,b) =>
                        (a.vchange < b.vchange) ? 1 : ((b.vchange < a.vchange) ? -1 : 0)).slice(0,12);
                        
                    }).then(()=>{
                        setTopData(finalData);
                     
                    })
                   
                  })
       
                       });   
                    
                
    }
    return (
        <>
        <div className="row">
        <div className="col m-2 d-flex justify-content-center">
            <div className="section-title">
              Top  Volume Changes
            </div>
        </div>
    </div>
    <div className="row text-center">
        <div className="col d-flex justify-content-center ">
            In  <select className="ml-2" onChange={e=>{setTimeframe(e.target.value)}}name="timeframe">
                            <option value="15m">15 Min</option>
                            <option value="30m" selected>30 Min</option>
                            <option value="1h">1h</option>
                            <option value="2h">2h</option>
                            <option value="4h">4h</option>
                        </select>
        </div>
    </div>
        <div className="row">
            <Singlebox topdata={topdata}/>
        </div>
        </>
       
    );
}

export default TopVolumeOverview;

