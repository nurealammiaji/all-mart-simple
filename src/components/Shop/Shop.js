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
                <p>This is the products area</p>
                <div className='products-container'>
                    {
                        products.map(product => <Products key={product.id} product={product}></Products>)
                    }
                </div>
            </div>
            <div className='cart-area'>
                <p>This is the cart area</p>
            </div>
        </div>
    );
};

export default Shop;