import { useState, useEffect } from 'react';

import { type SingleUserAlbum, type UserAlbumList as AlbumList} from '../../types/api';
import { getUserAlbums } from '../../api';

import UserAlbum from '../UserAlbum/UserAlbum';
import Loader from '../Loader';
import Error from '../Error';
import styles from './UserAlbumList.module.scss';

type UserAlbumListProps = {
    userId: number;
    isClicked: boolean;
};

const UserAlbumList = ({userId, isClicked}: UserAlbumListProps) => {
    const [albumList, setAlbumList] = useState<AlbumList>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    
    const getList = async () => {
        try {
            const albums = await getUserAlbums(userId);
            setAlbumList(albums);
        } catch (e) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isClicked) {

            getList();
        }
    }, [userId, isClicked]);

    return (
        <ul className={styles.albumList}>
            {isLoading && <Loader />}
            {isError && <Error />}
            {albumList.map((album: SingleUserAlbum) => {
                return (
                    <UserAlbum key={album.id} {...album}/>
                )
            })}
        </ul>
    )
};

export default UserAlbumList;