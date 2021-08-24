function MovieCard({film}){
    
    return (
     <tr>
    
    <td>{film.titre}</td>
    <td>{film.description}</td>
    <td>{film.posterURL}</td>
    <td>{film.evaluation}</td>
    
      </tr>
        )
    }
    export default MovieCard;
	