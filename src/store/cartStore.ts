// спочатку ми робимо імпорт для create
import { create } from 'zustand';

//створюємо інтерфейси

interface Product {
    id: number
    name: string
    price: number
}

interface CartState {
    items: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (id: number) => void
    clearCart: () => void
}

//створюємо функцію
export const useCartStore = create<CartState>((set) => ({
    items: [],
    addToCart: (product) =>
        set((state) => ({items: [...state.items, product] })),
    removeFromCart: (id) =>
        set((state) => ({
            items: state.items.filter((item) => item.id !== id),
        })),
        clearCart: () => set({ items: []})
}))