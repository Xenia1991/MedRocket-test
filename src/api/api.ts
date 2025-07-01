import type { UserList, UserAlbum, UserAlbumList } from '../types/api';

export const getUserList = async (): Promise<UserList> => {
    const response = await fetch('https://json.medrocket.ru/users/');
    const data = await response.json();
    return data;
};

export const getUserAlbums = async (userId: number): Promise<UserAlbumList> => {
    const response = await fetch(`https://json.medrocket.ru/albums?userId=${userId}`);
    const data = await response.json();
    return data;
};

export const getAlbum = async (albumId: number): Promise<UserAlbum> => {
    const response = await fetch(`https://json.medrocket.ru/photos?albumId=${albumId}`);
    const data = await response.json();
    console.log(data)
    return data;
};