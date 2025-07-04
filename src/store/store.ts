import {create} from 'zustand';
import type { Store } from '../types/store';

const useStore = create<Store>((set) => ({
    url: '',
    setUrl: (newUrl) => set(() => ({url: newUrl})),
    isModalOpened: false,
    setIsModalOpened: (newState) => set(() => ({isModalOpened: newState})),
    favoriteCollection: [],
    addCollection: (collection) => set((state) => ({favoriteCollection: [...state.favoriteCollection, collection]})),
    deleteCollection: (collection) => set((state) => ({
        favoriteCollection: state.favoriteCollection.filter((item) => item.id !== collection.id),
    }))
}));

export default useStore;
