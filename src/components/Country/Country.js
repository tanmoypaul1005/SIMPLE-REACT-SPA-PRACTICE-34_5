import React from 'react';

const Country = (props) => {
const {name,population,region,flag}=props.CountryInfo;

const flagstyle={height:'100px',width:'100px'}
const countrystyle={border: '3px solid gray',margin:'10px',padding:'10px',}
    return (
        <div style={countrystyle}>
           <h4>This is {name}</h4> 
           <img style={flagstyle} src={flag} alt="" />
           <p>Population : {population}</p>
           <p>Region : {region}</p>
           <button onClick={()=>props.handleAddCountry(props.CountryInfo)}>Country Add</button>
           <br />
        </div>
    );
};

export default Country;