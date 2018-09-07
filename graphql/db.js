export let movies = [
    {   
        id: 0,
        title: "Ironman",
        star: 4,
        actor: "Rodaju",
    },
    {   
        id: 1,
        title: "Captin America-Winter solider",
        star: 5,
        actor: "Chris Evans"
    },
    {
        id: 2,
        title: "Spiderman-Homecoming",
        star: 2,
        actor: "Tom Holland"
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovie = movies.filter(movie => movie.id === id);
    console.log(filteredMovie);
    return filteredMovie[0];
};

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies){
        movies = cleandedMovies;
        return true;
    } else {
        return false;
    };
}

export const addMovie = (title, star, actor) => {
    const newMovie = {
        id: movies.length,
        title,
        star,
        actor
    };
    movies.push(newMovie);
    return newMovie;
};











