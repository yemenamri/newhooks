import React from 'react';
import { useState } from 'react';

  function AddFilm({addMovieHandler }) {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [posterURL, setposterURL] = useState("");
    const [rating, setrating] = useState("");
    const addTitle = (e) =>{
      settitle(e.target.value);
    };
    const addDescription = (e) =>{
      setdescription(e.target.value);
    };
    const addPosterurl = (e) =>{
      setposterURL(e.target.value);
    };
    const addRating = (e) =>{
      setrating(e.target.value);
    };

    const submitHandler = () => {
      addMovieHandler({
        id:Math.random(),
        title:title,
        description:description,
        posterURL:posterURL,
        rating:rating
      })
    }
  
    return (
      <div className='col col-sm-12'>
        <div className='form-control'>

        
        <label>Title:</label>
        <input
          name='Title' 
          type='text'
          
          onChange={addTitle}
        />
        
        <label>Description:</label>
      
        <input 
          name='description' 
          type='text' 
          
          onChange={addDescription}
        />
       
        <label>PosterURL:</label>
        
        <input
          name='posterURL' 
          type='text' 
        
          onChange={addPosterurl}
        />
        
        <label>Rating:</label>
       
        <input
          name='rating' 
          type='text' 
          
          onChange={addRating}
        />
       
       
        <button onClick={submitHandler}> ADD</button>
      </div>
      </div>
    )
  }

  export default AddFilm;