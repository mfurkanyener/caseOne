import React from 'react';
import CartIcon from './CartIcon';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 fixed w-full z-10 top-0 left-0">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center italic">
                    <h2 className="text-xl font-semibold">Case</h2>
                </div>

                <div className="flex-1 text-center">
                    <h1 className="font-bold">Ürünler</h1>
                </div>

                <div className="flex items-center">
                    <CartIcon/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;