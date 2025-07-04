import { useState, useEffect } from 'react';

import type { AlbumProps } from '../../types/Album';
import type { AlbumList } from '../../types/api';
import { getAlbum } from '../../api';
import useStore from '../../store/store';

import Loader from '../Loader';
import Error from '../Error';
import styles from './Album.module.scss';
import FavoriteButton from '../FavoriteButton';
import Tooltip from '../Tooltip';

const Album = ({isClicked, id}: AlbumProps )=> {
    const [albumCollection, setAlbumContent] = useState<AlbumList>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const {setUrl, setIsModalOpened, isMouseOver, setIsMouseOver, setTitle} = useStore();

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
    };

    const handleMouseOver = (text: string) => {
        setIsMouseOver(true);
        setTitle(text);
    };

    const handleMouseOut = () => {
        setIsMouseOver(false);
    };
    
    return (
        <div className={styles.container}>
            {isLoading && <Loader />}
            {isError && <Error />}
            {albumCollection?.map((collection) => {
                const {id, thumbnailUrl, url, title} = collection;
                return (
                    <div 
                        className={styles.albumImg} 
                        key={id} onClick={() => handleClick(url)} 
                        onMouseOver={() => handleMouseOver(title)} 
                        onMouseOut={handleMouseOut}
                    >
                        <FavoriteButton {...collection}/>
                        <img src={thumbnailUrl} />
                        {isMouseOver ? <Tooltip {...collection} /> : null}
                    </div>  
                )
            })}
        </div>
    );
};

export default Album;