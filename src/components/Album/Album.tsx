import { useState, useEffect } from 'react';

import type { AlbumProps } from '../../types/Album';
import type { AlbumList } from '../../types/api';
import { getAlbum } from '../../api';

import styles from './Album.module.scss';

const Album = ({isClicked, id}: AlbumProps )=> {
    const [albumCollection, setAlbumContent] = useState<AlbumList>([]);

    useEffect(() => {
        if (isClicked) {
            const getData= async () => {
                const data = await getAlbum(id);
                setAlbumContent(data);
            };
            getData();
        }
    }, [isClicked, id])
    
    return (
        <div className={styles.container}>
            {albumCollection?.map((collection) => {
                return (
                    <img src={collection.thumbnailUrl}/>
                )
            })}
        </div>
    )
};

export default Album;