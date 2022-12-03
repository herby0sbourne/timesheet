import { v4 as uuidv4 } from "uuid";
import { users } from "../../database/database.js";

const Mutation = {
  createUser: (parent, args, ctx, info) => {
    const newUser = { id: uuidv4(), userName: args.userName };
    users.push(newUser);
    return newUser;
  },
};

export default Mutation;
