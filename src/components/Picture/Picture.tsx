import { useState } from "react";
import useStore from "../../store/store";
import type { SingleAlbum } from "../../types/api";

import FavoriteButton from "../FavoriteButton";
import Tooltip from "../Tooltip";
import styles from './Picture.module.scss';

const Picture = (collection: SingleAlbum) => {
    const {setUrl, setIsModalOpened} = useStore();
    const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);
    const {id, url, title, thumbnailUrl} = collection;
   
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
    
    return (
        <div 
            className={styles.albumImg} 
            key={id} onClick={() => handleClick(url)} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}
        >
            <FavoriteButton {...collection}/>
            <img src={thumbnailUrl} />
            {isTooltipOpen ? <Tooltip {...collection} /> : null}
        </div>  
    )
};

export default Picture;
