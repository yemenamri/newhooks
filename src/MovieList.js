import MovieCard from './MovieCard'
import SearchBox from './components/SearchBox';

function MovieList({film}){
  
    return(
        
            <div>
                <div><SearchBox /></div>
                <div><input 
            
            type="text" 
            placeholder="Titre" 
           
            /> <input 
            
            type="text" 
            placeholder="Description" 
           
            /> <input 
            
            type="text" 
            placeholder="Poster URL" 
           
            /> <input 
            
            type="text" 
            placeholder="Evaluation" 
           
            /> <button >Ajouter</button></div>
       <table>
       
     <thead>
      <tr>
      <td style={{color:'Black', fontWeight: 'bold'}}>Titre</td>
    <td style={{color:'Black', fontWeight: 'bold'}}>Description</td>
    <td style={{color:'Black', fontWeight: 'bold'}}>Poster URL</td>
    <td style={{color:'Black', fontWeight: 'bold'}}>Evaluation</td>
    </tr>
    </thead>
 <tbody>
   
   

 { film.map((detailfilm)=> (<MovieCard  film= {detailfilm}/>))}

   </tbody>
  
    </table>
</div>  


    )
}

export default MovieList