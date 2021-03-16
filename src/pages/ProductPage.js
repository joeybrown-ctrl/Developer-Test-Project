import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductPage(props) {
    const [product, setProduct] = useState([]);
    const prodId = props.match.params.id;

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${prodId}`);
            setProduct(data);
        }

        fetchProduct();
    }, [prodId]);

    return (
        <>
            <Link to="/" className="products__link">←  Products</Link>
            <div className="product">
                <div className="product__title-img">
                    <h1 className="product__title">{product.title}</h1>
                    <img src={product.image} alt="" className="large small" height="600px" width="340px" />
                </div>
                <div className="product__info">
                    <h3 className="product__category">{product.category}</h3>
                    <h2 className="product__price">${product.price}</h2>
                    <p className="product__desc">{product.description}</p>
                    <button className="product__cart">Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductPage;