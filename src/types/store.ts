export type Store = {
    url: string;
    setUrl: (url: string) => void;
    isModalOpened: boolean;
    setIsModalOpened: (state: boolean) => void;
};
