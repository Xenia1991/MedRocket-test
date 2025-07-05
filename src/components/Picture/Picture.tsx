import { useState } from "react";
import useStore from "../../store/store";

import FavoriteButton from "../FavoriteButton";
import Tooltip from "../Tooltip";
import styles from './Picture.module.scss';

import type { SingleAlbum } from "../../types/api";

type PictureProps = {
    collection: SingleAlbum,
    showTooltip?: boolean,
};

const Picture = ({collection, showTooltip}: PictureProps) => {
    const {setUrl, setIsModalOpened} = useStore();
    const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);
    const [pointY, setPointY] = useState<number>(0);
    const [pointX, setPointX] = useState<number>(0);
    const {id, url, thumbnailUrl} = collection;
   
    const handleClick = (imgUrl: string) => {
        setUrl(imgUrl);
        setIsModalOpened(true);
    };

    const handleMouseOver = () => {
        setIsTooltipOpen(true);

    };

    const handleMouseOut = () => {
        setIsTooltipOpen(false);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        setPointX(e.clientX);
        setPointY(e.clientY);
    };
    
    return (
        <div 
            className={styles.picture} 
            onClick={() => handleClick(url)} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}
            onMouseMove={handleMouseMove}
        >
            <FavoriteButton {...collection}/>
            <img src={thumbnailUrl} className={styles.albumImg}/>
            {isTooltipOpen && showTooltip ? <Tooltip {...collection} top={pointY} left={pointX} /> : null}
        </div>  
    )
};

export default Picture;
