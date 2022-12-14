import moment from "moment/moment";
import { Moment } from "moment";

const displayDate = (newDate: Moment | null) => {
    const dateMonthYear = moment(newDate).format("dddd |MMMM DD, YYYY| h:mm A");
    // @ts-ignore
    if (isNaN(new Date(newDate))) return "";
    const [wkdy, date, time] = dateMonthYear.split("|");
    return [wkdy, date, time];
};

export default displayDate;
