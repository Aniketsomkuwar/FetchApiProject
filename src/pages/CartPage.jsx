import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem } from "../features/cartSlice";

const Cart = () => {
    const cart = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const clearCart = () => {
        dispatch(clearItem());
    };

    const total = () => {
        if (!cart || cart.length === 0) {
            return 0;
        }

        return (
            cart.reduce((acc, item) => {
                const price = item?.price || item?.defaultPrice || 0;
                return acc + price;
            }, 0) / 100
        );
    };

    const removeItemFromCart = (id) => {
        dispatch(removeItem(id));
    }


    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
                </div>
                <button className="border-1 p-2 rounded-lg text-2xl font-semibold mb-4 text-red-500" onClick={() => clearCart()}>
                    Clear cart
                </button>
            </div>

            {cart.length == 0 ? <h1 className="text-center font-bold p-2">Cart is empty ,please add </h1> : cart.map((item, index) => (
                <div
                    key={index}
                    className="m-5 flex border rounded-lg p-4  justify-between items-start"
                >
                    <div className="flex">
                        <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.imageId}`}
                            alt={item?.name}
                            className="w-20 h-20 object-cover rounded mr-4"
                        />
                        <div className="flex-1">
                            <h2 className="text-lg font-medium">{item?.name}</h2>
                            <p className="text-gray-600">
                                Price: Rs. {(item?.defaultPrice || item?.price || 0) / 100}
                            </p>
                            <p className="text-gray-600">Quantity: 2</p>
                        </div>
                    </div>
                    <button className="border-1 p-1 rounded-lg font-semibold mb-4 text-red-500" onClick={() => removeItemFromCart(index)}>
                        Delete Item
                    </button>
                </div>
            ))}

            <div className="border-t border-b p-10">
                <div className="flex justify-between">
                    <div>Total :</div>
                    <div>{total()}</div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
