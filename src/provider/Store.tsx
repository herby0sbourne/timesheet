import React, { createContext, useEffect, useState } from "react";
import moment, { Moment } from "moment";
import DUTY from "../data/DUTY";
import JOBS from "../data/Jobs";

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

export type IJob = {
    id: string;
    title: string;
    userId: string;
};

export interface StoreContextInterface {
    user: object;
    StartShift: Moment | null;
    endShift: Moment | null;
    duration: number;
    jobs: IJob[];
    duties: IDuty[];
    // setDuty: React.Dispatch<React.SetStateAction<IDuty[]>>;
    newDuty: (duty: any) => void;
    createDuty: (date: Moment | null) => void;
    endDuty: (date: Moment | null) => void;
    createNewJob: (job: string) => void;
}

interface Props {
    children: React.ReactNode;
}

// export const StoreContext = createContext<StoreContextInterface | null>(null);
export const StoreContext = createContext<StoreContextInterface>({} as StoreContextInterface);

const StoreProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState({});
    const [jobs, setJobs] = useState(JOBS);
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
        const totalHours = Math.round(hours);
        // console.log(totalHours);
        if (!totalHours) return;
        setDuration(totalHours);
    }, [StartShift, endShift]);

    const createDuty = (StartShift: Moment | null) => {
        setStartDuty(StartShift);
    };

    const endDuty = (endShift: Moment | null) => {
        setEndDuty(endShift);
    };

    const newDuty = (duty: IDuty) => {
        setDuty((prevState) => {
            return [...prevState, duty];
        });
    };

    const createNewJob = (job: string) => {
        console.log(job);
    };

    return (
        <StoreContext.Provider
            value={{
                user,
                jobs,
                StartShift,
                endShift,
                duration,
                duties,
                createNewJob,
                createDuty,
                endDuty,
                newDuty
            }}>
            {children}
        </StoreContext.Provider>
    );
};

StoreContext.displayName = "Store";
export default StoreProvider;
