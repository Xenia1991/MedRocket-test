import styles from './Tooltip.module.scss';

import type { SingleAlbum } from "../../types/api";

export type TooltipProps = SingleAlbum & {
    top: number,
    left: number,
}

const Tooltip = ({title, top, left}: TooltipProps) => {

    return (
        <div 
            className={styles.tooltip}
            style={{top: `${top+30}px`, left: `${left+5}px`}}
        >
            {title}
        </div>
    )
};

export default Tooltip;