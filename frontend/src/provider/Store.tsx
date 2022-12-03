import React, { createContext, useEffect, useState } from "react";
import moment, { Moment } from "moment";
import DUTY from "../data/DUTY";
import JOBS from "../data/Jobs";

interface IUser {
    username: string;
    password: string;
    prevState: null;
}

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
    jobs: IJob[];
    duties: IDuty[];
    // setDuty: React.Dispatch<React.SetStateAction<IDuty[]>>;
    newDuty: (duty: any) => void;
    createNewJob: (job: object) => void;
}

interface Props {
    children: React.ReactNode;
}

// export const StoreContext = createContext<StoreContextInterface | null>(null);
export const StoreContext = createContext<StoreContextInterface>({} as StoreContextInterface);

const StoreProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<IUser | object>({});
    const [jobs, setJobs] = useState(JOBS);
    const [duties, setDuty] = useState(DUTY);

    const newDuty = (duty: IDuty) => {
        setDuty((prevState) => {
            return [...prevState, duty];
        });
    };

    const createNewJob = (job: object) => {
        // @ts-ignore
        setJobs((prevState) => {
            // @ts-ignore
            return [...prevState, job];
        });
    };

    return (
        <StoreContext.Provider
            value={{
                user,
                jobs,
                duties,
                createNewJob,
                newDuty
            }}>
            {children}
        </StoreContext.Provider>
    );
};

StoreContext.displayName = "Store";
export default StoreProvider;
