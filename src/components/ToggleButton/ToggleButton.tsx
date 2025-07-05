import styles from './ToggleButton.module.scss';

type ToggleButtonProps = {
    isClicked: boolean;
};

const ToggleButton = ({isClicked}: ToggleButtonProps) => {
    const toggleClass = isClicked ? styles.closeButton : styles.openButton;
    
    return (
        <button className={toggleClass} />
    );
};

export default ToggleButton;
