import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function SearchCategory(props) {
    const [product, setProduct] = useState([]);
    const category = props.match.params.category;

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            setProduct(data);
        }

        fetchProduct();
    }, [category]);

    console.log(category);
    console.log(product);

    return (
        <>
            <div className="category__header">
                <Link to="/category" className="categories__link">←  Categories</Link>
                <Link to="/category" className="categories__link-mobile">←</Link>
                <h1 className="category__title">{category.toUpperCase()}</h1>
            </div>
            <div className="cards-wrap">
                {
                    product.map(product => {
                        return (
                            <ProductCard key={product.id} id={product.id} image={product.image} title={product.title} desc={product.description} price={product.price} />
                        );
                    })
                }
            </div>
        </>
    )
}

export default SearchCategory;