import {TimelineData} from "../../../data/timelineData";
import {LineProps, TimelineLine} from "../../atoms/TimelineLine/TimelineLine";
import {caret} from "../../../assets";
import styles from './TimelineLines.module.css';

interface TimelineLinesProps {
    points: TimelineData;
}

export const TimelineLines = ({points}: TimelineLinesProps) => {
    const calcPoints = points.filter((p, i) => p.transition === 'solid' || i === points.length - 1)
    let lines: LineProps[] = [];
    calcPoints.forEach((cp, i) => {
        if (i === 0) return; // Skip the first point as it has no previous point to connect to
        const prevPoint = calcPoints[i - 1];
        const isLast = i === calcPoints.length - 1;
        const isFirst = i === 1;
        const math = {
            from: prevPoint.left,
            to: isLast ? cp.left + 50: cp.left,
            leftPadding: isFirst ? 24 : 12,
            rightPadding: isLast ? 0 : 8,
        };
        const out: LineProps = {
            left: math.from + math.leftPadding,
            width: math.to - math.from - (math.rightPadding + math.leftPadding),
            borderStyle: cp.transition === 'solid' ? 'solid' : 'dashed',
        }
        lines.push(out);
    })
    return <>
        {lines.map((line, index) => (
            <TimelineLine {...line} key={`Timelineline-${index}`}/>
        ))}
        <img className={styles.endCaret} src={caret} alt=''/>
    </>
}
