import useStore from '../../store/store';

import Empty from '../Empty';
import Picture from '../Picture';
import styles from './Favorites.module.scss';

const Favorites = () => {
    const {favoriteCollection} = useStore();

    if (favoriteCollection.length === 0) {
        return <Empty />;
    };

    return (
        <div className={styles.collectionContainer}>
            {favoriteCollection?.map((collection) => {
                const {title} = collection;
                return (
                    <div className={styles.imgWrapper}>
                        <Picture collection={collection} />
                        <p>{title}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Favorites;
