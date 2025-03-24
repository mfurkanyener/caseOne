import React from 'react';
import { useSelector } from 'react-redux';

const CartIcon = () => {
    const itemsCount = useSelector(state => state.cart.items.length); // Sepetteki öğe sayısı

    return (
        <div className="relative">
            <button className="text-white flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M3 3h18l-1.5 9H4.5L3 3z"
                    />
                </svg>

                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transform -translate-x-1/4 -translate-y-1/4">
                    {itemsCount}
                </span>
            </button>
        </div>
    );
};

export default CartIcon;