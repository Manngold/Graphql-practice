import { movies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
    Query: {
        movies: () => movies,
        movie: (_, { id }) => getById(id),
    },
    Mutation: {
        addMovie: (_, {title, star, actor}) => addMovie(title, star,actor),
        deleteMovie: (_, {id}) => deleteMovie(id)
    }
};

export default resolvers;