import React from 'react';

const SearchBox = ({mysearch}) => {
	const searchHandler = (e)=> {
		mysearch(e.target.value);
	};
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
			
				onChange= {searchHandler}
				placeholder='Type to search...'
			></input>
			
		</div>
	);
};

export default SearchBox;