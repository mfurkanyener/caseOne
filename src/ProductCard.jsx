import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './redux/cartSlice';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem(product));
    };

    return (
        <div className="card p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-2">{product.title}</h2>
            <p className="text-lg text-green-500">${product.price}</p>
            <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-black py-2 px-4 rounded mt-2 w-full"
            >
                Sepete Ekle
            </button>
        </div>
    );
};

export default ProductCard;