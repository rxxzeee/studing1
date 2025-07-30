import React, { use } from "react";
import { useCartStore } from "../store/cartStore";

interface ProductProps {
    id: number
    name: string
    price: number
}

export const Product = ({ id, name, price }: ProductProps) => {
    const addToCart = useCartStore((state) => state.addToCart)

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>
            <h3>{name}</h3>
            <p>${price}</p>
            <button onClick={() => addToCart({ id, name, price})}>
                Add to Cart
            </button>
            </div>
        </div>
    )
}