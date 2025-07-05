import { useEffect } from 'react';
import useStore from '../../store/store';

import { COLLECTION_KEY } from '../../store/store';
import type { SingleAlbum } from '../../types/api';

import Empty from '../Empty';
import Picture from '../Picture';
import styles from './Favorites.module.scss';

const Favorites = () => {
    const {favoriteCollection, setCollections} = useStore();

    useEffect(() => {
        const localStorageCollection = JSON.parse(localStorage.getItem(COLLECTION_KEY));
        setCollections(localStorageCollection);
    }, []);

    if (favoriteCollection.length === 0) {
        return <Empty />;
    };

    return (
        <div className={styles.collectionContainer}>
            {favoriteCollection?.map((collection: SingleAlbum) => {
                const {title, id} = collection;
                return (
                    <div key={id} className={styles.imgWrapper}>
                        <Picture collection={collection} />
                        <p>{title}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Favorites;
