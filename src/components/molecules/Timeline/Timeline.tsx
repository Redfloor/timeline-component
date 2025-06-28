import {TimelineData} from "../../../data/timelineData";
import {TimelinePoint} from "../TimelinePoint/TimelinePoint";
import styles from './Timeline.module.css';
import {TimelineLines} from "../TimelineLines/TimelineLines";

export interface TimelineProps {
    timelineData: TimelineData;
}

export const Timeline = ({timelineData}: TimelineProps) => {
    const points = timelineData.map((point, index) => (
        <TimelinePoint
            data={point}
            isLast={index === timelineData.length - 1}
            key={`timeline-point-${point.left}`}
        />
    ));
    return <div className={styles.timelineContainer}>
        {points}
        <TimelineLines points={timelineData}/>
    </div>
}
