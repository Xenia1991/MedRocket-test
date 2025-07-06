import {create} from 'zustand';
import type { Store } from '../types/store';
import type { SingleAlbum } from '../types/api';

export const COLLECTION_KEY: string = 'collection';

const useStore = create<Store>((set) => ({
    pictureUrl: '',
    setUrl: (newUrl) => set(() => ({pictureUrl: newUrl})),
    isModalOpened: false,
    setIsModalOpened: (newState) => set(() => ({isModalOpened: newState})),
    favoriteCollection: [],
    addToCollection: (collection: SingleAlbum) => set((state) => {
        const newCollection = [...state.favoriteCollection, collection];
        localStorage.setItem(COLLECTION_KEY, JSON.stringify(newCollection));
        return { favoriteCollection: newCollection };
    }),
    deleteFromCollection: (collection) => set((state) => {
        const newCollection = state.favoriteCollection.filter((item) => item.id !== collection.id);
        localStorage.setItem(COLLECTION_KEY, JSON.stringify(newCollection));
        return { favoriteCollection:  newCollection };
    }),
    setCollection: (collections) => set(() => ({favoriteCollection: collections})),
}));

export default useStore;
