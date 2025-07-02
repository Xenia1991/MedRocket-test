import { useState } from 'react';

import {type UserAlbum} from '../../types/api';

import ToggleButton from '../ToggleButton';
import styles from './Album.module.scss';

const Album = ({title}: UserAlbum) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const handleClick = () => {
        setIsClicked((prev) => !prev);
    };
    
    return (
        <>
            <li className={styles.albumItem}>
                <ToggleButton onClick={handleClick} isClicked={isClicked}/>
                <div className={styles.albumTitle}>{title}</div>
            </li>
            <div className={styles.toggleUserAlbum}></div>
        </>
    );
};

export default Album;