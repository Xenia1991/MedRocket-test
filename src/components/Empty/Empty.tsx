import styles from './Empty.module.scss';

const Empty = () => {
    return (
        <div className={styles.emptyContainer}>
            <div className={styles.emptyImg}></div>
            <div className={styles.emptyText}>
                <p className={styles.emptyNotify}>Список избранного пуст</p>
                <p className={styles.emptyMessage}>Добавляйте изображения, нажимая на звездочки</p>
            </div>
        </div>
    )
};

export default Empty;
