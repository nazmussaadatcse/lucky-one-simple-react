import React from 'react';
import CartDetails from '../CartDetails/CartDetails';
import RandomOne from '../RandomOne/RandomOne';
import './Cart.css'

const Cart = ({cart,handleRandomOne,random,handleRemove}) => {


    return (

        <div className='cart'>
            <h4>Order Quantity:{cart.length}</h4>
            <p>product details</p>
            {
                cart.map(cartInfo=> <CartDetails details={cartInfo}></CartDetails>)
            }

            <button onClick={handleRandomOne}>Choose 1 for me</button>
            
               <RandomOne RandomProduct={random}></RandomOne>
            
            <button onClick={handleRemove}>Choose Again</button>
                 
        </div>
    );
};

export default Cart;