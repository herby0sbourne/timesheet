import { v4 as uuidv4 } from "uuid";

export type Job = {
    id: string;
    title: string;
};

// export type Jobs = Job[];

const JOBS = [
    {
        id: uuidv4(),
        title: "Security Duties"
    },
    {
        id: uuidv4(),
        title: "Studio managers"
    }
];

export default JOBS;
// { id: any; title: string }[]
