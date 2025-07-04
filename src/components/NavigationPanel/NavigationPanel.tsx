import { Link } from 'react-router-dom';

import styles from './NavigationPanel.module.scss';

const NavigationPanel = () => {
    return (
        <div className={styles.navigation}>
            <Link to='/' className={styles.catalog}>Каталог</Link>
            <Link to='/favorites' className={styles.favorites}>Избранное</Link>
        </div>
    );
};

export default NavigationPanel;