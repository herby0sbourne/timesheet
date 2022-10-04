import { createContext, useEffect, useState } from "react";
import moment, { Moment } from "moment";

export interface StoreContextInterface {
    StartShift: Moment | string;
    endShift: Moment | string;
    duration: number;
    createDuty: (date: any) => any;
    endDuty: (date: any) => any;
}

export const StoreContext = createContext<StoreContextInterface | null>(null);

const StoreProvider = ({ children }: any) => {
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

    const createDuty = (StartShift: any) => {
        setStartDuty(StartShift);
    };

    const endDuty = (endShift: any) => {
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
