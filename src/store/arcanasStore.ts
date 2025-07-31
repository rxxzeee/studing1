// src/store/arcanasStore.ts
import { create } from 'zustand';

export type Arcana = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
};

interface ArcanasState {
arcanas: Arcana[];
addArcana: (arcana: Arcana) => void;
setArcanas: (data: Arcana[]) => void;
}

export const useArcanasStore = create<ArcanasState>((set) => ({
arcanas: [],
addArcana: (arcana) =>
set((state) => ({
arcanas: [...state.arcanas, arcana],
})),
setArcanas: (data) => set({ arcanas: data }),
}));