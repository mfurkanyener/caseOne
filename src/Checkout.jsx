import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

    const handleCheckout = () => {
        alert('Siparişiniz başarıyla tamamlandı!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12"
             style={{maxHeight: '600px', overflowY: 'auto'}}>
            <h1 className="text-3xl font-semibold text-center mb-6">Sipariş Tamamlama</h1>

            <div className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="block text-lg font-medium">Adınız</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Adınızı girin"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="address" className="block text-lg font-medium">Adresiniz</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Adresinizi girin"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="paymentMethod" className="block text-lg font-medium">Ödeme Yöntemi</label>
                    <input
                        type="text"
                        id="paymentMethod"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        placeholder="Ödeme yöntemini girin"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        required
                    />
                </div>
            </div>

            <div className="mt-6 p-4 bg-gray-100 rounded-md">
                <h2 className="text-xl font-semibold">Sipariş Özeti</h2>
                <div className="space-y-2 mt-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between text-lg">
                            <span>{item.title}</span>
                            <span>${item.price}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-between text-xl font-bold">
                    <span>Toplam:</span>
                    <span>${totalAmount}</span>
                </div>
            </div>

            <button
                onClick={handleCheckout}
                className="w-full mt-6 bg-blue-500 text-black py-3 rounded-md hover:bg-blue-600"
            >
                Siparişi Tamamla
            </button>
        </div>
    );
};

export default Checkout;