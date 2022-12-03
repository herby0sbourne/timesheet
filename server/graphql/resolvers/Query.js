import {jobs,users,duties} from '../../database/database.js'

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
  duty:(parent, args, ctx, info) =>{
    const duty = duties.find((duty) => duty.id === args.id)
    return duty
  },
  duties:(parent, args, ctx, info) =>{
    return duties
  }
};

export default Query;
