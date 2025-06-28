import {timelineData} from "../../../data/timelineData";
import {Timeline} from "../../molecules";

export const TestView = () => {
    return (
        <Timeline
            timelineData={timelineData}
        />
    )
}
