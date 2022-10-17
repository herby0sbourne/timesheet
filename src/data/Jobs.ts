import { v4 as uuidv4 } from "uuid";

export type Job = {
    id: string;
    title: string;
    userId: string;
};

// export type Jobs = Job[];

const JOBS = [
    {
        id: uuidv4(),
        userId: "2",
        title: "Security Duties"
    },
    {
        id: uuidv4(),
        userId: "3",
        title: "Studio managers"
    }
];

export default JOBS;
// { id: any; title: string }[]
