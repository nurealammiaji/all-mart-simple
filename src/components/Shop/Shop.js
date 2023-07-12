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

    return (
        <div className='shop'>
            <div className='products-area'>
                <div className='products-container'>
                    {
                        products.map(product => <Products key={product.id} product={product}></Products>)
                    }
                </div>
            </div>
            <div className='cart-area'>
                <div className='cart-container'>
                    <h3>Order Summary</h3>
                    <div>
                        <p>Selected Items: </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;