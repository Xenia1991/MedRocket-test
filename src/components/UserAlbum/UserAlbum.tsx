import { useState } from 'react';

import {type SingleUserAlbum} from '../../types/api';

import ToggleButton from '../ToggleButton';
import styles from './UserAlbum.module.scss';
import Album from '../Album';

const UserAlbum = ({title, id}: SingleUserAlbum) => {
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
            {isClicked ? <Album isClicked={isClicked} id={id}/> : null}
        </>
    );
};

export default UserAlbum;