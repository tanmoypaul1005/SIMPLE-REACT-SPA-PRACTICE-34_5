import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    let totalPopulation=0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation=country.population+totalPopulation
        
    }
    return (
        <div>
         <h4>Country Added : {cart.length}</h4>
         <h4>Population Added : {totalPopulation}</h4>
        </div>
    );
};

export default Cart;