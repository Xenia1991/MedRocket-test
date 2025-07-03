import { useState, useEffect } from 'react';

import type { AlbumProps } from '../../types/Album';
import type { AlbumList } from '../../types/api';
import { getAlbum } from '../../api';
import useStore from '../../store/store';

import Loader from '../Loader';
import Error from '../Error';
import styles from './Album.module.scss';

const Album = ({isClicked, id}: AlbumProps )=> {
    const [albumCollection, setAlbumContent] = useState<AlbumList>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const {setUrl, setIsModalOpened} = useStore();

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
    
    const handleClick = (imgUrl: string) => {
        setUrl(imgUrl);
        setIsModalOpened(true);
        console.log('click');
    };
    
    return (
        <div className={styles.container}>
            {isLoading && <Loader />}
            {isError && <Error />}
            {albumCollection?.map((collection) => {
                const {id, thumbnailUrl, url} = collection;
                return (
                    <div key={id} onClick={() => handleClick(url)}>
                        <img src={thumbnailUrl}/>
                    </div>  
                )
            })}
        </div>
    );
};

export default Album;