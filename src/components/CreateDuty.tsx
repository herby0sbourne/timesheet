import React, { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import MaterialUIPickers from "./MaterialUIPickers";
import { StoreContext } from "../provider/Store";
import displayDate from "../utils/displayDate";
import DisplayDate from "./DisplayDate";
import CustomBtn from "./CustomBtn";
import InputGroup from "./InputGroup";
import { v4 as uuidv4 } from "uuid";

interface CreateDutyProps {
    openModal: boolean;
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateDuty = ({ openModal, closeModal }: CreateDutyProps) => {
    const { StartShift, endShift, duration, createDuty, endDuty, newDuty } =
        useContext(StoreContext);
    const [displayCheckIn, setDisplayCheckIn] = useState<string[] | string>([]);
    const [displayCheckOut, setDisplayCheckOut] = useState<string[] | string>([]);
    const nodeRef = useRef(null);

    useEffect(() => {
        setDisplayCheckIn(displayDate(StartShift));
    }, [StartShift]);

    useEffect(() => {
        setDisplayCheckOut(displayDate(endShift));
    }, [endShift]);

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const pay = duration * 310;
        const duty = {
            id: uuidv4(),
            userId: 2,
            clockInDay: StartShift?.format(),
            clockOutDay: endShift?.format(),
            clockedIn: StartShift?.format("LT"),
            clockedOut: endShift?.format("LT"),
            pay,
            location: "cotton factory",
            hoursWorked: duration,
            rate: 310
        };
        newDuty(duty);
        console.log(duty);
    };

    // console.log(displayCheckOut);
    // console.log(moment(StartShift).format());
    return (
        <CSSTransition
            in={openModal}
            nodeRef={nodeRef}
            timeout={300}
            classNames="alert"
            unmountOnExit
            onEnter={() => closeModal(true)}
            onExited={() => closeModal(false)}>
            <div className={"form-container h-screen modal z-[99]"} ref={nodeRef}>
                <div className="container px-4 flex items-center justify-center flex-col">
                    <form onSubmit={onSubmitHandler} className={"pt-7 w-full"}>
                        <div className="start-duty text-center">
                            <h1 className={"font-semibold text-xl mb-3"}>Start Duty</h1>
                            <MaterialUIPickers dutyType={createDuty} today={new Date()} />
                            <DisplayDate displayDate={displayCheckIn} timeColor />
                        </div>
                        <div className="start-duty text-center">
                            <h1 className={"font-semibold text-xl mb-3"}>End Duty</h1>
                            <MaterialUIPickers dutyType={endDuty} today={null} />
                            <DisplayDate displayDate={displayCheckOut} />
                        </div>

                        <div className="hours-worked flex gap-x-2 justify-start items-center">
                            <h2 className="duration-worked text-xl font-extralight">Hours</h2>
                            <p className="hours font-normal text-[1.2rem]">{duration}</p>
                        </div>

                        <InputGroup type="number" name="rate" placeholder="rate or cost per hour" />
                        <InputGroup type="text" name="location" placeholder="Location / Job" />

                        <div className="btn-options flex justify-end gap-x-5 mt-10">
                            <CustomBtn title={"Cancel"} closeModal={closeModal} />
                            <CustomBtn title={"Create"} closeModal={closeModal} />
                        </div>
                    </form>
                </div>
            </div>
        </CSSTransition>
    );
};

export default CreateDuty;
