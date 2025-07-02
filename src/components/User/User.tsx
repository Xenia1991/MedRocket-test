import ToggleButton from '../ToggleButton';
import styles from './User.module.scss';
import {type SingleUser} from '../../types/api';

const User = ({name}: SingleUser) => {
    return (
        <li className={styles.listItem}>
            <ToggleButton />
            <div className={styles.userName}>{name}</div>
        </li>
    )
};

export default User;
