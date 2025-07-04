import { useState } from 'react';
import useStore from '../../store/store';

import type { SingleAlbum } from '../../types/api';

import styles from './FavoriteButton.module.scss';

const FavoriteButton = (collection : SingleAlbum) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const {addCollection, deleteCollection} = useStore();

    const handleButtonClick = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
        setIsActive(prev => !prev);
        if (!isActive) {
            addCollection(collection);
        } else {
            deleteCollection(collection);
        }
    };
    const buttonClass = isActive ? styles.favoriteButtonActive : styles.favoriteButtonEmpty;
    
    return (
        <button className={buttonClass} onClick={handleButtonClick}/>
    )
};

export default FavoriteButton;