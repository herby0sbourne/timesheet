import { IDuty } from "../provider/Store";
import moment from "moment";
import formatPay from "../utils/fromatPay";

interface DutyProps {
    duty: IDuty;
}

const Duty = ({ duty }: DutyProps) => {
    const clockInDay = moment(duty.clockInDay).format("MMMM Do, YYYY");
    // const clockInDay = moment(duty.clockInDay, moment.ISO_8601);

    return (
        <div className="duty bg-[#f9f7f6] px-4 pt-4 pb-2 border-b-2 border-[#f5deb3]">
            <div className="date flex justify-between items-center">
                <div className="date-worked">{clockInDay}</div>
                <div className="cost">{formatPay.format(duty.pay)}</div>
            </div>
            <div className="work-hours">
                <div className="hour flex justify-between items-center">
                    <div className="time-in-out">
                        <span className="time-in inline-block mr-8 text-[#b28451]">
                            {duty.clockedIn}
                        </span>
                        <span className="time-out inline-block">{duty.clockedOut}</span>
                    </div>
                    <div className="total-hours">{duty.hoursWorked}h</div>
                </div>
            </div>
            <div className="location font-semibold text-[13px] mt-1 text-gray-400">
                <div>Location: {duty.location}</div>
            </div>
        </div>
    );
};

export default Duty;
