import { getMovies, getSuggestions } from "./db";

const resolvers = {
    Query: {
        movies: (_, {limit, rating}) => getMovies(limit, rating),
        movie: (_, { id }) => getMovies(id),
        suggestion: (_, { id }) => getSuggestions(id)
    }
};

export default resolvers;