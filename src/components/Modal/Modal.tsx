import useStore from '../../store/store';

import styles from './Modal.module.scss';

const Modal = () => {
    const {pictureUrl, isModalOpened, setIsModalOpened} = useStore();

    const handleClick = () => {
        setIsModalOpened(false);
    };

    if (!isModalOpened) {
        return null;
    };

    return (
        <div className={styles.modalOverlay}>
            <button onClick={handleClick} className={styles.modalButton} />
            <div className={styles.modalContent}>
                <img src={pictureUrl}/>
            </div>
        </div>
    );
};

export default Modal;
