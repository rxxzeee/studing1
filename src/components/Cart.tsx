import React from "react";
import { useCartStore } from "../store/cartStore";

export const Cart = () => {
    const items = useCartStore((state) => state.items)
    const removeFromCart = useCartStore((state) => state.removeFromCart)
    const clearCart = useCartStore((state) => state.clearCart)

    return (
        <div>
            <h2>Cart ({ items.length}) </h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            {items.length > 0 && <button onClick={clearCart}>Clear cart</button>}
        </div>
    )
}