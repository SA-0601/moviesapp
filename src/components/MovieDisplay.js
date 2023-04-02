

function MovieDisplay(props){
    const {movie} = props;
    console.log(movie);
    if(movie?.Error){
        return <h3>Movie not found</h3>
    }
    const loaded = () => {
        return (
            <div>
                <h3>Title : {movie.Title}</h3>
                <h4>Released Year : {movie.Year}</h4>
                <h4>Actors : {movie.Actors}</h4>
                <h4>Awards: {movie.Awards}</h4>
                <h4>BoxOffice: {movie.BoxOffice}</h4>
                <p>Rated : {movie.Rated}</p>
                <img src={movie.Poster} alt={movie.Title}/>
            </div>
            )
    }

    const loading = () => {
        <h1>No movie to display</h1>
    }

    return movie ? loaded() : loading();
}

export default MovieDisplay;