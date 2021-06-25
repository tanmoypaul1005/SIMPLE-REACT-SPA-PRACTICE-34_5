
import './App.css';
import data from './data/data.json';
import React, { useState,useEffect } from 'react';
import Country from './components/Country/Country'
import Cart from './components/Cart/Cart'
function App() {

const [Clubs, setClubs] = useState([]);
useEffect(() => {
setClubs(data);
}, [])


const [countries, setcountries] = useState([]);
useEffect(() => {
  fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(data => setcountries(data))
}, [])
const [cart, setcart] = useState([]);


 const handleAddCountry =(countrie)=>{
   const newcart=[...cart,countrie];
   setcart(newcart);
 }
  return (
    <div className="App">
    <ul>
     {
       Clubs.map(Data=><li>{Data.first_name}</li>)
     }
    </ul>
    


    <h1>Country Loaded : {countries.length}</h1>
    <h4>Country Added : {cart.length}</h4>
    <Cart cart={cart}></Cart>
    <ul>
     {
       countries.map(cd=><Country CountryInfo={cd} handleAddCountry={handleAddCountry}></Country>)
     } 
  </ul>   


    </div> 
  );
}

export default App;
