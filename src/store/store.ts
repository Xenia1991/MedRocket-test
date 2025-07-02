import {create} from 'zustand';
import type { Store } from '../types/store';

const useStore = create<Store>((set) => ({
    url: '',
    setUrl: (newUrl) => set(() => ({url: newUrl})),
    isModalOpened: false,
    setIsModalOpened: (newState) => set(() => ({isModalOpened: newState})),
}));

export default useStore;
