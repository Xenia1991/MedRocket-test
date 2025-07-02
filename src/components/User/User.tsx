import { useState } from 'react';

import {type SingleUser} from '../../types/api';

import ToggleButton from '../ToggleButton';
import AlbumList from '../AlbumList';
import styles from './User.module.scss';

const User = ({name, id}: SingleUser) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const handleClick = () => {
        setIsClicked((prev) => !prev);
    };
    
    return (
        <>
            <li className={styles.listItem}>
                <ToggleButton onClick={handleClick} isClicked={isClicked}/>
                <div className={styles.userName}>{name}</div>
            </li>
            <li className={styles.albumList}>
                {isClicked ? <AlbumList userId={id} isClicked={isClicked}/> : null}
            </li>
        </>
    );
};

export default User;
