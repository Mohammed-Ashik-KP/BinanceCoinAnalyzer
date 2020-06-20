import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/style.css';
import Simplebox from './Simplebox';
function TopVolume(props) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col m-2 d-flex justify-content-center">
                        <div className="section-title">
                            Top Volume Changes
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <Carousel>
  <Carousel.Item>
            <Simplebox title1='BTCUSD' amount1="10 BTC" change1="6%"/>

  </Carousel.Item>

  <Carousel.Item>
  <Simplebox title1='ETHBTC' amount1="65 BTC" change1="32%"/>
  </Carousel.Item>
 
</Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopVolume;