import { useState } from 'react';

import {type SingleUser} from '../../types/api';

import ToggleButton from '../ToggleButton';
import UserAlbumList from '../UserAlbumList';
import styles from './User.module.scss';

const User = ({name, id}: SingleUser) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClick = () => {
        setIsClicked((prev) => !prev);
    };
    
    return (
        <>
            <li className={styles.listItem} onClick={handleClick} >
                <ToggleButton isClicked={isClicked}/>
                <div className={styles.userName}>{name}</div>
            </li>
            {isClicked ? <UserAlbumList userId={id} isClicked={isClicked}/> : null}
        </>
    );
};

export default User;
