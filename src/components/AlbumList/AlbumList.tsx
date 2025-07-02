import { useState, useEffect } from 'react';

import { type UserAlbum, type UserAlbumList} from '../../types/api';
import type { AlbumListProps } from '../../types/AlbumList';
import { getUserAlbums } from '../../api';

import Album from '../Album/Album';
import styles from './AlbumList.module.scss';

const AlbumList = ({userId, isClicked}: AlbumListProps) => {
    const [albumList, setAlbumList] = useState<UserAlbumList>([]);
    
    useEffect(() => {
        if (isClicked) {
            const getList = async () => {
                const albums = await getUserAlbums(userId);
                setAlbumList(albums);
            };
            getList();
        }
    }, [userId, isClicked]);

    return (
        <ul>
            {albumList.map((album: UserAlbum) => {
                return (
                    <Album key={album.id} {...album}/>
                )
            })}
        </ul>
    )
};

export default AlbumList;