import type { SingleAlbum } from "./api";
    
export type Store = {
    pictureUrl: string;
    setUrl: (url: string) => void;
    isModalOpened: boolean;
    setIsModalOpened: (state: boolean) => void;
    favoriteCollection: SingleAlbum[];
    addToCollection: (collection: SingleAlbum) => void;
    deleteFromCollection: (collection: SingleAlbum) => void;
    setCollection: (collection: SingleAlbum[]) => void;
};
