import React from 'react';
import './Products.css';

const Products = (props) => {

    const {id, name, price} = props.product;
    console.log(props.product);

    return (
        <div className='product-card'>
            <img src="" alt="" />
            <h4>{name}</h4>
            <small>ID: {id}</small>
            <p>Price: {price}</p>
        </div>
    );
};

export default Products;