import {create} from 'zustand';
import type { Store } from '../types/store';
import type { SingleAlbum } from '../types/api';

export const COLLECTION_KEY: string = 'collection';

const useStore = create<Store>((set) => ({
    url: '',
    setUrl: (newUrl) => set(() => ({url: newUrl})),
    isModalOpened: false,
    setIsModalOpened: (newState) => set(() => ({isModalOpened: newState})),
    favoriteCollection: [],
    addCollection: (collection: SingleAlbum) => set((state) => {
        const newCollection = [...state.favoriteCollection, collection];
        localStorage.setItem(COLLECTION_KEY, JSON.stringify(newCollection));
        return { favoriteCollection: newCollection };
    }),
    deleteCollection: (collection) => set((state) => {
        const newCollection = state.favoriteCollection.filter((item) => item.id !== collection.id);
        localStorage.setItem(COLLECTION_KEY, JSON.stringify(newCollection));
        return { favoriteCollection:  newCollection };
    }),
    setCollections: (collections) => set(() => ({favoriteCollection: collections})),
}));

export default useStore;
