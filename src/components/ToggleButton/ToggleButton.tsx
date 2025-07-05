import { type ToggleButtonProps } from '../../types/toggleButton';

import styles from './ToggleButton.module.scss';

const ToggleButton = ({isClicked}: ToggleButtonProps) => {
    const toggleClass = isClicked ? styles.closeButton : styles.openButton;
    
    return (
        <button className={toggleClass} />
    );
};

export default ToggleButton;
