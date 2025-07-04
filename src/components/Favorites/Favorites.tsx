import useStore from '../../store/store';

import Empty from '../Empty';
import FavoriteButton from '../FavoriteButton';
import styles from './Favorites.module.scss';

const Favorites = () => {
    const {favoriteCollection} = useStore();

    if (favoriteCollection.length === 0) {
        return <Empty />;
    };

    return (
        <div className={styles.collectionContainer}>
            {favoriteCollection?.map((collection) => {
                const {id, thumbnailUrl, title} = collection;
                return (
                    <div className={styles.imgWrapper} key={id}>
                        <FavoriteButton {...collection}/>
                        <img src={thumbnailUrl} />
                        <p>{title}</p>
                    </div>  
                )
            })}
        </div>
    );
};

export default Favorites;
