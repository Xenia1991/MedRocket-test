import { useState, useEffect } from 'react';

import type { AlbumProps } from '../../types/Album';
import type { AlbumList } from '../../types/api';
import { getAlbum } from '../../api';
import useStore from '../../store/store';

import Modal from '../Modal';
import Loader from '../Loader';
import styles from './Album.module.scss';

const Album = ({isClicked, id}: AlbumProps )=> {
    const [albumCollection, setAlbumContent] = useState<AlbumList>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const {url, setUrl, setIsModalOpened} = useStore();

    useEffect(() => {
        if (isClicked) {
            const getData= async () => {
                const data = await getAlbum(id);
                setAlbumContent(data);
                setIsLoading(false);
            };
            getData();
        }
    }, [isClicked, id]);
    
    const handleClick = (imgUrl: string) => {
        setUrl(imgUrl);
        setIsModalOpened(true);
        console.log('click');
    };
    
    return (
        <div className={styles.container}>
            {isLoading && <Loader />}
            {albumCollection?.map((collection) => {
                const {id, thumbnailUrl, url} = collection;
                return (
                    <div key={id}>
                        <div onClick={() => handleClick(url)}>
                            <img src={thumbnailUrl}/>
                        </div>  
                    </div>
                )
            })}
        </div>
    )
};

export default Album;