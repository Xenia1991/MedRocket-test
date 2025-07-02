import { useState, useEffect } from 'react';

import { type SingleUser, type UserList as UserListType} from '../../types/api';
import { getUserList } from '../../api';

import User from '../User';
import Loader from '../Loader';
import styles from './UserList.module.scss';

const UserList = () => {
    const [userList, setUserList] = useState<UserListType>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getList = async () => {
            const data = await getUserList();
            setUserList(data);
            setIsLoading(false);
        };
        getList();
    }, []);

    return (
        <>
            {isLoading && <Loader />}
            <ul className={styles.userList}>
                {userList.map((user: SingleUser) => {
                    return (
                        <User key={user.id} {...user}/>
                    )
                })}
            </ul>
        </>
    );
};

export default UserList;
