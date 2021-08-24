import React from 'react';

const MovieSearch = ({mysearch}) => {
	const searchHandler = (e)=> {
		mysearch(e.target.value);
	};
	return (
		<div>
			
		</div>
	);
};

export default MovieSearch;