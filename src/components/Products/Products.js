import React from 'react';
import './Products.css';

const Products = (props) => {

    const {img, name, price, seller, ratings} = props.product;
    console.log(props.product);

    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <small>Manufacturer: {seller}</small>
            <br />
            <small>Rating: {ratings} Star</small>
        </div>
    );
};

export default Products;