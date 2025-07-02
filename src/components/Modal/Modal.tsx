import ReactDOM from 'react-dom';

import useStore from '../../store/store';

import styles from './Modal.module.scss';

const Modal = () => {
    const {url, isModalOpened, setIsModalOpened} = useStore();

    const handleClick = () => {
        setIsModalOpened(false);
    };

    if (!isModalOpened) {
        return null;
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button onClick={handleClick}>Закрыть</button>
                <img src={url}/>
            </div>
        </div>
    );
};

export default Modal;
