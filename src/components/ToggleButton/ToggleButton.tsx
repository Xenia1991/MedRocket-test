import { useState } from 'react';
import styles from './ToggleButton.module.scss';

const ToggleButton = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const handleClick = () => {
        setIsClicked((prev) => !prev)
    };

    const toggleClass = isClicked ? styles.closeButton : styles.openButton
    return (
        <button className={toggleClass} onClick={handleClick} />
    )
};

export default ToggleButton;
