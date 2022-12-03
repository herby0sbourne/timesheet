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

const Query = {
  users: (parent, args, context, info) => {
    console.log(context);

    return users;
  },
  user: (parent, args, ctx, info) => {
    const user = users.find((user) => user.id === args.id);

    return user;
  },

  jobs: (parent, args, ctx, info) => {
    return jobs;
  },
  job: (parent, args, ctx, info) => {
    const job = jobs.find((job) => job.userId === args.id);
    return job;
  },
};

export default Query;
