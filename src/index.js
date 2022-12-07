import React from 'react';
import reactDOM from 'react-dom';
import Card from './Cards';
import "./index.css";
import Sdata from './Sdata';

function ncard(val){
    return(
<Card imgsrc={val.imgsrc} 
title={val.title} 
sname={val.sname}
link={val.link}/>
    );
}


reactDOM.render(<>
<h1 className='heading_style'>List Of Top 6 Netflix Series</h1>




{Sdata.map(ncard)};

 </>, document.getElementById('root')
); 
