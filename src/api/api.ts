import type { UserList, UserAlbum, UserAlbumList } from '../types/api';

export const getUserList = async (): Promise<UserList>=> {
    try {
        const response = await fetch('https://json.medrocket.ru/users/');
        if (!response.ok) {
            throw new Error('Oops! HTTP Error');
        }
        const data = await response.json();
        return data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log('ERROR! Try again later', error);
        } else {
            console.log('Unknown error happens', error);
        }
        throw error;
    }
};

export const getUserAlbums = async (userId: number): Promise<UserAlbumList> => {
    try {
        const response = await fetch(`https://json.medrocket.ru/albums?userId=${userId}`);
        if (!response.ok) {
            throw new Error('Oops! HTTP Error');
        }
        const data = await response.json();
        return data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log('ERROR! Try again later', error);
        } else {
            console.log('Unknown error happens', error);
        }
        throw error;
    }
};

export const getAlbum = async (albumId: number): Promise<UserAlbum> => {
    try {
        const response = await fetch(`https://json.medrocket.ru/photos?albumId=${albumId}`);
        if (!response.ok) {
            throw new Error('Oops! HTTP Error');
        }
        const data = await response.json();
        return data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log('ERROR! Try again later', error); 
        } else {
            console.log('Unknown error happens', error);
        }
        throw error;
    }
};