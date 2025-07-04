import { type ToggleButtonProps } from '../../types/toggleButton';

import styles from './ToggleButton.module.scss';

const ToggleButton = ({onClick, isClicked}: ToggleButtonProps) => {
    const toggleClass = isClicked ? styles.closeButton : styles.openButton;
    
    return (
        <button className={toggleClass} onClick={onClick} />
    );
};

export default ToggleButton;
