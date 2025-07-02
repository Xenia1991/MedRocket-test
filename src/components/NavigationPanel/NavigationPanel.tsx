import styles from './NavigationPanel.module.scss';

const NavigationPanel = () => {
    return (
        <div className={styles.navigation}>
            <a className={styles.catalog}>Каталог</a>
            <a className={styles.favorites}>Избранное</a>
        </div>
    );
};

export default NavigationPanel;