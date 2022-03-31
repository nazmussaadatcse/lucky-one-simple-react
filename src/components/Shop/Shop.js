import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    // product state 
    const [products, setProducts] = useState([]);

    // cart state 
    const [cart, setCart] =  useState([]);

    //random state
    const [random, setRandom] = useState([]);


    useEffect(() => {
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[]);

    // add to cart btn 

    const handleAddToCart = (product) =>{
        // console.log('clicked');
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const handleRandomOne = () =>{

        const random = cart[Math.floor(Math.random()*cart.length)];
        
        setRandom(random);
        // console.log(random);
    };

    const handleRemove = () =>{
        setCart([]);
        setRandom([]);
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        
                    ></Product>)
                }
                
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                handleRandomOne={handleRandomOne}
                random={random}
                handleRemove={handleRemove}
                ></Cart>              
            </div>
        </div>
    );
};

export default Shop;