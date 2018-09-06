import { Users, getById } from "./db";

const resolvers = {
    Query: {
        people: () => Users,
        user: (_, { id }) => getById(id),
    },
};

export default resolvers;