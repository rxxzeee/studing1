import { create } from 'zustand';

interface AdminStore {
  isLoggedIn: boolean;
  openModal: boolean;
  login: () => void;
  logout: () => void;
  setOpenModal: (value: boolean) => void;
}

export const useAdminStore = create<AdminStore>((set) => ({
  isLoggedIn: false,
  openModal: false,
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
  setOpenModal: (value) => set({ openModal: value }),
}));
