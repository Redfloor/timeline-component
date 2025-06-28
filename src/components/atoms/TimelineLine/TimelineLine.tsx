import styles from "./TimelineLine.module.css";

export interface LineProps {
    left: number;
    width: number;
    borderStyle: 'solid' | 'dashed';
}

export const TimelineLine = (props: LineProps) => {
    return  <div className={styles.line} style={props}></div>
}
