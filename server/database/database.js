import { v4 as uuidv4 } from 'uuid';

const users = [
    {
        userName: 'sam',
        id: '1',
    },
    {
        userName: 'smith',
        id: '2',
    },
    {
        userName: 'will',
        id: '3',
    },
];

const duties=  [
    {
        id: uuidv4(),
        userId: 2,
        clockInDay: "Sun September 24, 2222",
        clockOutDay: "Sun September 25, 2222",
        clockedIn: "7:00 AM",
        clockedOut: "7:00 PM",
        pay: 3744.0,
        location: "cotton factory",
        hoursWorked: 12,
        rate: 310
    },
    {
        id: uuidv4(),
        userId: 2,
        clockInDay: "Sun September 25, 2222",
        clockOutDay: "Sun September 25, 2222",
        clockedIn: "7:00 AM",
        clockedOut: "7:00 PM",
        pay: 3744.0,
        location: "cotton factory",
        hoursWorked: 12,
        rate: 310
    },
    {
        id: uuidv4(),
        userId: 3,
        clockInDay: "Sun September 26, 2222",
        clockOutDay: "Sun September 25, 2222",
        clockedIn: "7:00 AM",
        clockedOut: "7:00 PM",
        pay: 3744.0,
        location: "cotton factory",
        hoursWorked: 12,
        rate: 310
    },
    {
        id: uuidv4(),
        userId: 2,
        clockInDay: "Sun September 27, 2222",
        clockOutDay: "Sun September 25, 2222",
        clockedIn: "7:00 AM",
        clockedOut: "7:00 PM",
        pay: 3744.0,
        location: "cotton factory",
        hoursWorked: 12,
        rate: 310
    },
    {
        id: uuidv4(),
        userId: 3,
        clockInDay: "Sun September 28, 2222",
        clockOutDay: "Sun September 25, 2222",
        clockedIn: "7:00 AM",
        clockedOut: "7:00 PM",
        pay: 3744.0,
        location: "cotton factory",
        hoursWorked: 12,
        rate: 310
    },
    {
        id: uuidv4(),
        userId: 2,
        clockInDay: "Sun September 29, 2222",
        clockOutDay: "Sun September 25, 2222",
        clockedIn: "7:00 AM",
        clockedOut: "7:00 PM",
        pay: 3744.0,
        location: "cotton factory",
        hoursWorked: 12,
        rate: 310
    },
    {
        id: uuidv4(),
        userId: 3,
        clockInDay: "Sun September 30, 2222",
        clockOutDay: "Sun September 25, 2222",
        clockedIn: "7:00 AM",
        clockedOut: "7:00 PM",
        pay: 3744.0,
        location: "cotton factory",
        hoursWorked: 12,
        rate: 310
    }
];

const jobs = [
    {
        id: uuidv4(),
        userId: '2',
        title: 'Security Duties',
    },
    {
        id: uuidv4(),
        userId: '3',
        title: 'Studio managers',
    },
];


export {users,jobs,duties}