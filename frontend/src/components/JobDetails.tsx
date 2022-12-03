import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../provider/Store";
import CreateDuty from "./CreateDuty";
import Duty from "./Duty";
import formatPay from "../utils/fromatPay";

const JobDetails = () => {
    const [openModal, setOpenModal] = useState(false);
    const { duties } = useContext(StoreContext);
    const { id } = useParams();

    const filterDuties = duties.filter((duty) => {
        return duty.userId.toString() === id;
    });

    // @ts-ignore
    const hoursPay = filterDuties.reduce(
        (previousValue, currentValue) => {
            const total = { hours: 0, pay: 0 };

            total.pay = previousValue.pay + currentValue.pay;
            total.hours = previousValue.hours + currentValue.hoursWorked;

            return total;
        },
        { hours: 0, pay: 0 }
    );

    const hours = filterDuties.reduce((prevValue, currValue): number => {
        return prevValue + currValue.hoursWorked;
    }, 0);

    const pay = filterDuties.reduce((prevValue, currValue): number => {
        return prevValue + currValue.pay;
    }, 0);

    return (
        <>
            <div>
                <div className="header-info relative bg-gradient-radial">
                    <div className="container px-4 m-auto h-[16vh]">
                        <div className="flex justify-between items-center">
                            <div className="heading">TimeSheet</div>

                            <div className="hours">$0.00/hour</div>
                        </div>

                        <button
                            className="create-duty py-2 px-3 text-white text-lg hover:bg-cyan-600 rounded-lg bg-[#101d2c]"
                            onClick={() => setOpenModal(true)}>
                            Create Duty
                        </button>

                        <div className="total-pay bg-white shadow-[0px_7px_13px_-6px_rgba(0,0,0,0.28);] translate-y-1/2 flex justify-between items-center absolute bottom-0 right-0 left-0 px-4 py-6 z-[2] m-auto w-[calc(100%-1rem)] rounded-[8px] font-medium tracking-wider">
                            <div className="total max-w-[50%] grow"> Total</div>

                            <div className="hours">{hours}h</div>

                            <div className="money text-[#5aba8a]">{formatPay.format(pay)}</div>
                        </div>
                    </div>

                    <div className="duties-container bg-[#f9f7f6] h-screen fixed overflow-y-auto left-0 right-0 pt-8">
                        {filterDuties.map((duty) => {
                            return <Duty key={duty.id} duty={duty} />;
                        })}
                    </div>
                </div>
                <button
                    className="create-duty py-2 px-3 text-white text-lg hover:bg-cyan-600 rounded-lg bg-[#101d2c]"
                    onClick={() => setOpenModal(true)}>
                    Create Duty
                </button>
                <CreateDuty closeModal={setOpenModal} openModal={openModal} />
            </div>
        </>
    );
};

export default JobDetails;
