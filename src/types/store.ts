import type { SingleAlbum } from "./api";

export type Store = {
    url: string;
    setUrl: (url: string) => void;
    isModalOpened: boolean;
    setIsModalOpened: (state: boolean) => void;
    favoriteCollection: SingleAlbum[];
    addCollection: (collection: SingleAlbum) => void;
    deleteCollection: (collection: SingleAlbum) => void;
};
