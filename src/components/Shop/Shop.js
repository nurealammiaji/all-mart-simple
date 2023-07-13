import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    const addToCart = (product) => {
        console.log(product);
    }

    return (
        <div className='shop'>
            <div className='products-area'>
                <div className='products-container'>
                    {
                        products.map(product => <Products key={product.id} product={product} addToCart={addToCart}></Products>)
                    }
                </div>
            </div>
            <div className='cart-area'>
                <div className='cart-container'>
                    <h3>Order Summary</h3>
                    <div className='order-info'>
                        <p>Selected Items: </p>
                        <p>Total Price: </p>
                        <p>Total Shipping Charge: </p>
                        <p>Tax: </p>
                        <h5>Grand Total: </h5>
                    </div>
                    <button>Clear Cart</button>
                    <br/>
                    <br/>
                    <button>Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;