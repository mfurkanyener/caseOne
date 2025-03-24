import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Checkout from './Checkout';
import Navbar from './Navbar';

const App = () => {
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    const openCheckout = () => setIsCheckoutOpen(true);
    const closeCheckout = () => setIsCheckoutOpen(false);

    return (
        <div className="relative min-h-screen flex flex-col bg-white mx-auto max-w-screen-lg w-full items-center justify-center bg-white shadow-lg">
            <Navbar openCheckout={openCheckout} />

            <div className="container px-4 py-6 mt-20 mx-auto flex justify-center items-center ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <button
                    onClick={openCheckout}
                    className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                    Sepete Git
                </button>
            </div>

            {isCheckoutOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 w-96 rounded-lg shadow-lg">
                        <Checkout />
                        <button
                            onClick={closeCheckout}
                            className="mt-4 w-full bg-red-500 text-black py-2 rounded-md"
                        >
                            Kapat
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;