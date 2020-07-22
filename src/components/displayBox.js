import React, { useEffect, useState } from 'react';

function DisplayBox(props) {
    
    useEffect(()=>{
   
        if(props.pricechange<0){
            setPChangeClass("col mt-1  text-danger font-weight-bold")
        }
        else{
            setPChangeClass("text-success");
        }
        if(props.volumechange<0){
            setVChangeClass(" text-center text-danger font-weight-bold");
        }
        else{
            setVChangeClass("text-center text-success font-weight-bold");
        }
        if(props.vchangepercent<0){
            setVPChangeClass("text-center text-danger font-weight-bold")
        }
        else{
            setVPChangeClass("text-center text-success font-weight-bold")
        }
    },[props.pricechange,props.vchangepercent,props.volumechange])
    const [pchangeClass,setPChangeClass]=useState("text-success");
    const [vchangeClass,setVChangeClass] =useState(" text-center text-success font-weight-bold");
    const [vpchangeClass,setVPChangeClass]=useState(" text-center text-success font-weight-bold");
    return (
        <>
        <div className="row box-border d-flex text-center justify-content-center  align-items-center">
            
                      <div className=" col text-info font-weight-bolder m-2 coin">  {props.coin} </div>
                      <div className="col font-weight-bold "> P:<span> {props.cprice} </span></div>
                    <div className="col  font-weight-bold"> 24H C:<span className={pchangeClass}> {props.pricechange}%</span></div>
            </div>
            <div className="row">
            <div className="col-md-3 col-sm-12 m-2 text-center borderBottom">
                  <div className="block-title font-weight-bold mb-1">Volume Change</div>
                        <div className={vchangeClass}>{props.volumechange} BTC</div>
            </div>
            <div className="col-md-3 col-sm-12 m-2 text-center borderBottom">
                  <div className="block-title font-weight-bold mb-1">Volume Change Percentage</div>
                        <div className={vpchangeClass}>{props.vchangepercent} %</div>
            </div>
            <div className="col-md-3 col-sm-12 m-2 text-center borderBottom">
                  <div className="block-title font-weight-bold mb-1">Current Volume</div>
                        <div className="text-dark text-center font-weight-bold">{props.currentvolume} BTC</div>
            </div>
            </div>
      
        </>
    );
}

export default DisplayBox;