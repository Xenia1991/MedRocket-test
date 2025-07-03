import type { ErrorProps } from '../../types/Error';
import styles from './Error.module.scss';

const Error = ({isColumn}: ErrorProps )=> {
    const extraClass = isColumn ? undefined : styles.errorRow;

    return (
        <div className={`${styles.error} ${extraClass}`}>
            <div>
                <div className={styles.errorImg}></div>
            </div>
            <div className={styles.errorText}>
                <p className={styles.errorNotify}>Сервер не отвечает</p>
                <p className={styles.errorMessage}>Уже работаем над этим</p>
            </div>
        </div>
    )
};

export default Error;
