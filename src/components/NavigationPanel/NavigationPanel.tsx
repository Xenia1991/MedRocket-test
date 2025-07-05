import { NavLink } from 'react-router-dom';

import styles from './NavigationPanel.module.scss';

const NavigationPanel = () => {
    return (
        <div className={styles.navigation}>
            <NavLink 
                to='/'
                className={({ isActive }) =>isActive ? styles.navigationItemActive : styles.navigationItem}
            >
                Каталог
            </NavLink>
            <NavLink 
                to='/favorites'
                className={({ isActive }) =>isActive ? styles.navigationItemActive : styles.navigationItem}
            >
                Избранное
            </NavLink>
        </div>
    );
};

export default NavigationPanel;