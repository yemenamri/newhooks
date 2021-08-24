import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieSearch from './components/MovieSearch';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import MoviesList from './components/moviesList';

import AddFilm from './addFilm';
const App = () => {
	
	const [movies, setMovies] = useState([
		{
		  id: 1,
		  title: "La Tunisie",
		  description:"La Tunisie, en 1956, devient un pays indépendant après avoir connu le protectorat français de 1881 à 19561. Son premier président de la République est Habib Bourguiba, remplacé en 1987 par Zine el-Abidine Ben Ali.",
		  posterURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1200px-Flag_of_Tunisia.svg.png",
		  rating: "2",
		},
		{
		  id: 2,
		  title: "Tunisie 2011",
		  description:
			"La révolution tunisienne (arabe : الثورة التونسية), parfois appelée « révolution du jasmin » (ثورة الياسمين), est une révolution considérée comme partiellement non violente",
		  posterURL: "https://cdn.nawaat.org/wp-content/uploads/2011/05/tunisia-revolution-crowd-game-over.jpg",
		  rating: "4",
		},
		{
		  id: 3,
		  title: "Tunisie 2021",
		  description:
			"Dans l’absolu, la décision du chef de l’Etat est une véritable délivrance qui a été saluée, dans la soirée du dimanche 25 juillet 2021, par des manifestations spontanées à travers tout le pays.",
		  posterURL: "https://static.dw.com/image/56726743_303.jpg",
		  rating: "5",
		},
	  ]);


	
const addMovieHandler = (newMovie) => {
	setMovies([...movies,newMovie]);
};
const [searchinput,setsearchinput] = useState("");

	return (
		<div >
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox mysearch = {setsearchinput}/>
				<AddFilm addMovieHandler= {addMovieHandler}/>
			<MoviesList movies={movies} searchinput = {searchinput}/>
			</div>
     
			<div>
			
			
				
			</div>
		</div>
	);
};

export default App;