import React, { createContext, useEffect, useState } from "react";
import moment, { Moment } from "moment";

export interface StoreContextInterface {
    StartShift: Moment | string;
    endShift: Moment | string;
    duration: number;
    createDuty: (date: Moment | string) => void;
    endDuty: (date: Moment | string) => void;
}

interface Props {
    children: React.ReactNode;
}

export const StoreContext = createContext<StoreContextInterface | null>(null);

const StoreProvider: React.FC<Props> = ({ children }) => {
    const [StartShift, setStartDuty] = useState<Moment | string>(moment(new Date()));
    const [endShift, setEndDuty] = useState<Moment | string>("");
    const [duration, setDuration] = useState(0);

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

    const createDuty = (StartShift: Moment | string) => {
        setStartDuty(StartShift);
    };

    const endDuty = (endShift: Moment | string) => {
        setEndDuty(endShift);
    };

    return (
        <StoreContext.Provider value={{ StartShift, endShift, duration, createDuty, endDuty }}>
            {children}
        </StoreContext.Provider>
    );
};

StoreContext.displayName = "Store";
export default StoreProvider;
