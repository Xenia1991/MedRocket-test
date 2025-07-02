import { useState, useEffect } from 'react';

import { type SingleUserAlbum, type UserAlbumList as AlbumList} from '../../types/api';
import type { UserAlbumListProps } from '../../types/UserAlbumList';
import { getUserAlbums } from '../../api';

import UserAlbum from '../UserAlbum/UserAlbum';
import styles from './UserAlbumList.module.scss';

const UserAlbumList = ({userId, isClicked}: UserAlbumListProps) => {
    const [albumList, setAlbumList] = useState<AlbumList>([]);
    
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
        <ul className={styles.albumList}>
            {albumList.map((album: SingleUserAlbum) => {
                return (
                    <UserAlbum key={album.id} {...album}/>
                )
            })}
        </ul>
    )
};

export default UserAlbumList;