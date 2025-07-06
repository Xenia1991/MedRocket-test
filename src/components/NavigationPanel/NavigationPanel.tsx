import { NavLink } from 'react-router-dom';

import styles from './NavigationPanel.module.scss';

export const MAIN_PATH: string = '/';
export const FAVORITES_PATH = '/favorites';

const NavigationPanel = () => {
    return (
        <div className={styles.navigation}>
            <NavLink 
                to={MAIN_PATH}
                className={({ isActive }) =>isActive ? styles.navigationItemActive : styles.navigationItem}
            >
                Каталог
            </NavLink>
            <NavLink 
                to={FAVORITES_PATH}
                className={({ isActive }) =>isActive ? styles.navigationItemActive : styles.navigationItem}
            >
                Избранное
            </NavLink>
        </div>
    );
};

export default NavigationPanel;