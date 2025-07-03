import styles from './Error.module.scss';

const Error = () => {
    return (
        <div className={styles.error}>
            <div className={styles.errorImg}></div>
            <p className={styles.errorNotify}>Сервер не отвечает</p>
            <p className={styles.errorMessage}>Уже работаем над этим</p>
        </div>
    )
};

export default Error;
