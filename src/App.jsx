import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard.jsx';
import Checkout from './Checkout';
import { useSelector } from 'react-redux';
import Navbar from './Navbar.jsx';

const App = () => {
    const [products, setProducts] = useState([]);
    useSelector((state) => state.cart.items);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div className="relative min-h-screen flex flex-col bg-white mx-auto max-w-screen-lg w-full items-center justify-center bg-white shadow-lg">
            <Navbar/>
            <div className="container px-4 py-6 mt-20 mx-auto flex justify-center items-center ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
            <Checkout/>
        </div>

    );
};

export default App;