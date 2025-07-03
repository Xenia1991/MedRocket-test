import { useState } from 'react';

import styles from './FavoriteButton.module.scss';

const FavoriteButton = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    
    const handleButtonClick = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
        console.log('click');
        setIsActive(prev => !prev);
    };
    const buttonClass = isActive ? styles.favoriteButtonActive : styles.favoriteButtonEmpty;

    return (
        <button className={buttonClass} onClick={handleButtonClick}/>
    )
};

export default FavoriteButton;