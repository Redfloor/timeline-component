import { TimelinePoint as TimelinePointType } from "../../../data/timelineData";
import {EventCard} from "../../atoms";
import styles from './TimelinePoint.module.css';

interface TimelinePointProps {
    data: TimelinePointType
    isLast?: boolean;
}

export const TimelinePoint = ({data, isLast}: TimelinePointProps) => {
    const dynamicStyles = {
        '--item-left': `${data.left}px`,
    }

    const Cards = data.cards.map(({
                                              image, imageAlt, arrowDirection, children
                                          }) =>
        <EventCard
            key={`event-card-${imageAlt}`}
            image={image}
            imageAlt={imageAlt}
            arrowDirection={arrowDirection}
            isLast={isLast}
        >
            {children}
        </EventCard>
    )

    const Lines = data.cards.map((c) => {
        if (c.arrowDirection === 'up') {
            return <div key={`line-up-${c.imageAlt}`} className={styles.lineUp} />
        } else if (c.arrowDirection === 'down') {
            return <div key={`line-down-${c.imageAlt}`} className={styles.lineDown} />
        }
    })

    return (
        <div
            className={styles.container}
            //@ts-expect-error - TS doesn't like CSS variables
            style={dynamicStyles}
        >
            {data.marker === 'large' && <div className={styles.timelineDotLarge}/>}
            {data.marker === 'small' && <div className={styles.timelineDot}/>}
            {data.marker === 'none' && <div className={styles.noDot}/>}
            <p className={styles.label}>{data.label}</p>
            <>{Cards}</>
            <>{Lines}</>
        </div>
    )
}
