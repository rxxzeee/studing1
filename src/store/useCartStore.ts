import { create } from 'zustand';

export interface Arcana {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

interface CartStore {
    cartItems: Arcana[];
    addToCart: (item: Arcana) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
    cartItems: [],
    addToCart: (item) =>
    set((state) => {
        const exists = state.cartItems.some((i) => i.id === item.id);
            if (exists) return state;
        return { cartItems: [...state.cartItems, item] };
    }),
    removeFromCart: (id) =>
    set((state) => ({
        cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
    clearCart: () => set({ cartItems: [] }),
}));