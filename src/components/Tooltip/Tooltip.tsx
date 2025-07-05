import type { TooltipProps } from '../../types/Tooltip';

import styles from './Tooltip.module.scss';

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