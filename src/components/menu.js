import React, { useContext } from 'react';
import {Nav} from 'react-bootstrap';
import { contextData } from '../context/context';
function Menu(props) {
  const {setMenu} = useContext(contextData);

    return (
        <div>
            <Nav fill variant="tabs" defaultActiveKey="/">
  <Nav.Item>
    <Nav.Link eventKey="link-1" style={{"color":"#f20c1b","fontWeight":"bold"}}  onClick={ (e)=>{setMenu("volumeanalyzer")}}>Volume Analyzer</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2" style={{"color":"#f20c1b","fontWeight":"bold"}} onClick={ (e)=>{setMenu("priceaction")}}>Price Action</Nav.Link>
  </Nav.Item>
</Nav>
        </div>
    );
}

export default Menu;