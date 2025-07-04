import useStore from '../../store/store';

import type { SingleAlbum } from '../../types/api';

import styles from './Tooltip.module.scss';

const Tooltip = ({title}: SingleAlbum) => {
    // const {title, isMouseOver} = useStore();

    // if (!isMouseOver) {
    //     return null;
    // }

    return (<span className={styles.span}>{title}</span>)
};

export default Tooltip;