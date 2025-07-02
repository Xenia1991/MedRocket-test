import { useState, useEffect } from 'react';

import { type SingleUser, type UserList as UserListType} from '../../types/api';
import { getUserList } from '../../api';

import User from '../User';
import styles from './UserList.module.scss';

const UserList = () => {
    const [userList, setUserList] = useState<UserListType>([]);

    useEffect(() => {
        const getList = async () => {
            const data = await getUserList();
            setUserList(data);
        };
        getList();
    }, []);

    return (
        <ul className={styles.userList}>
            {userList.map((user: SingleUser) => {
                return (
                    <User key={user.id} {...user}/>
                )
            })}
        </ul>
    );
};

export default UserList;
