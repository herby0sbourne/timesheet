import React, { createContext, useEffect, useState } from "react";
import moment, { Moment } from "moment";
import DUTY from "../data/DUTY";

export type IDuty = {
    id: string;
    userId: number;
    clockInDay: string;
    clockOutDay: string;
    clockedIn: string;
    clockedOut: string;
    pay: number;
    location: string;
    hoursWorked: number;
    rate: number;
};

export interface StoreContextInterface {
    StartShift: Moment | null;
    endShift: Moment | null;
    duration: number;
    createDuty: (date: Moment | null) => void;
    endDuty: (date: Moment | null) => void;
    duties: IDuty[];
}

interface Props {
    children: React.ReactNode;
}

// export const StoreContext = createContext<StoreContextInterface | null>(null);
export const StoreContext = createContext<StoreContextInterface>({} as StoreContextInterface);

const StoreProvider: React.FC<Props> = ({ children }) => {
    const [StartShift, setStartDuty] = useState<Moment | null>(moment(new Date()));
    const [endShift, setEndDuty] = useState<Moment | null>(null);
    const [duration, setDuration] = useState(0);
    const [duties, setDuty] = useState(DUTY);

    useEffect(() => {
        // @ts-ignore
        const startTime = new moment(StartShift);
        // @ts-ignore
        const endTime = new moment(endShift);
        const duration = moment.duration(endTime.diff(startTime));

        const hours = duration.asHours();
        console.log(hours);
        const totalHours = Math.round(hours);
        console.log(totalHours);
        if (!totalHours) return;
        setDuration(totalHours);
    }, [StartShift, endShift]);

    const createDuty = (StartShift: Moment | null) => {
        setStartDuty(StartShift);
    };

    const endDuty = (endShift: Moment | null) => {
        setEndDuty(endShift);
    };

    return (
        <StoreContext.Provider
            value={{ StartShift, endShift, duration, duties, createDuty, endDuty }}>
            {children}
        </StoreContext.Provider>
    );
};

StoreContext.displayName = "Store";
export default StoreProvider;
