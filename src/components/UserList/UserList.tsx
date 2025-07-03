import { useState, useEffect } from 'react';

import { type SingleUser, type UserList as UserListType} from '../../types/api';
import { getUserList } from '../../api';

import User from '../User';
import Loader from '../Loader';
import Error from '../Error';
import styles from './UserList.module.scss';

const UserList = () => {
    const [userList, setUserList] = useState<UserListType>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const getList = async () => {
            try { 
                const data = await getUserList();
                setUserList(data);
                setIsLoading(false);
            } catch (e) {
                setIsError(true);
                setIsLoading(false);
            }
        };
        getList();
    }, []);

    return (
        <>
            {isLoading && <Loader />}
            {isError && <Error />}
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
