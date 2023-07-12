import React from 'react';
import './Products.css';

const Products = (props) => {

    const {img, name, price, seller, ratings} = props.product;
    console.log(props.product);

    return (
        <div className='product-card'>
            <div className='product-card-info'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <small>Manufacturer: {seller}</small>
                <br/>
                <small>Rating: {ratings} Star</small>
            </div>
            <button>
                <div style={{marginRight: "5px"}}>
                    <p>Add to Cart</p>
                </div>
                <div>
                    <svg id="i-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
                    <circle cx="25" cy="27" r="2" />
                    <circle cx="12" cy="27" r="2" />
                    </svg>
                </div>
            </button>
        </div>
    );
};

export default Products;