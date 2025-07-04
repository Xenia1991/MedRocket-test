import { useState, useEffect } from 'react';

import type { AlbumProps } from '../../types/Album';
import type { AlbumList } from '../../types/api';
import { getAlbum } from '../../api';

import Loader from '../Loader';
import Error from '../Error';
import styles from './Album.module.scss';
import Picture from '../Picture';

const Album = ({isClicked, id}: AlbumProps )=> {
    const [albumCollection, setAlbumContent] = useState<AlbumList>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        if (isClicked) {
            const getData= async () => {
                try {
                    const data = await getAlbum(id);
                    setAlbumContent(data);
                    setIsLoading(false);
                } catch (e) {
                    setIsLoading(false);
                    setIsError(true);
                }
            };
            getData();
        }
    }, [isClicked, id]);

    return (
        <div className={styles.container}>
            {isLoading && <Loader />}
            {isError && <Error />}
            {albumCollection?.map((collection) => <Picture {...collection} />)}
        </div>
    );
};

export default Album;