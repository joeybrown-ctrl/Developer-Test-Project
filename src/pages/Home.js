import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function Home() {
    const [product, setProduct] = useState([]);

    const fetchProduct = async () => {
        await axios.get('https://fakestoreapi.com/products')
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    console.log(product);

    return(
        <>
        <h3>Products</h3>
        <div>
            {product.map(product => {
                return(
                    <ProductCard key={product.id} id={product.id} image={product.image} title={product.title} desc={product.description} price={product.price} />
                )
            })}
        </div>
        </>
    )
}

export default Home;