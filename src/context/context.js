import React, { Component } from 'react';

export const contextData = React.createContext();

class ContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        menu:'volumeanalyzer',
        coin:'ETHBTC' }
    }

setMenu = (val) =>{
    this.setState({menu:val})    
}
setCoin = (e) =>{this.setState({coin: e})}
    render() { 
        return (  
           
            <contextData.Provider value={{...this.state,setMenu:this.setMenu,setCoin:this.setCoin}}>
                {this.props.children}
            </contextData.Provider>
        );
    }
}
 
export default ContextProvider;