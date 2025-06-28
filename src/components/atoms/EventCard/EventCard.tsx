import React from "react";
import styles from './EventCard.module.css'
import {TimelineItem} from "../../../data/timelineData";

interface EventCardProps extends TimelineItem {
    isLast?: boolean;
}

export const EventCard = ({image, imageAlt, children, arrowDirection, isLast}: EventCardProps) => {
    const isUpArrow = arrowDirection === 'up';
    const wrapperStyle = `${styles.eventCard} ${!isUpArrow ? styles.upArrowWrapper : styles.downArrowWrapper} ${isLast ? styles.last : ''}`;

    return (
        <div
            className={wrapperStyle}
        >
            {isUpArrow && <div className={styles.upArrow}></div>}
            <img src={image} alt={imageAlt} />
            <p>{children}</p>
            {!isUpArrow && <div className={styles.downArrow}></div>}
        </div>
    )
}
