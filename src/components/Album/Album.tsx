import { useState, useEffect } from 'react';

import type { AlbumProps } from '../../types/Album';
import type { AlbumList } from '../../types/api';
import { getAlbum } from '../../api';

import styles from './Album.module.scss';

const Album = ({isClicked, id}: AlbumProps )=> {
    const [albumCollection, setAlbumContent] = useState<AlbumList>([]);
    const [isImgClicked, setIsImgClicked] = useState<boolean>(false);

    useEffect(() => {
        if (isClicked) {
            const getData= async () => {
                const data = await getAlbum(id);
                setAlbumContent(data);
            };
            getData();
        }
    }, [isClicked, id])
    
    const handleClick = () => {
        setIsImgClicked((prev) => !prev);
        console.log('click')
    }
    return (
        <div className={styles.container}>
            {albumCollection?.map((collection) => {
                const {id, thumbnailUrl} = collection;
                return (
                    <div onClick={handleClick} key={id}>
                        <img src={thumbnailUrl}/>
                    </div>
                )
            })}
            
        </div>
    )
};

export default Album;