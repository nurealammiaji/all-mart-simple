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
            {
                products.map(product => console.log(product))
            }
            <div className='products-area'>
                <p>This is products area</p>
                <Products></Products>
            </div>
            <div className='cart-area'>
                <p>This is cart area</p>
            </div>
        </div>
    );
};

export default Shop;