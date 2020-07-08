import React from 'react';
import Box from './Box';

function Singlebox(props) {
    return (
        props.topdata.map((data,i)=>{
            return <Box coin={data.c} vchange={data.vchange} vcp={data.vcp} key={i} />
        })
    );
}

export default Singlebox;