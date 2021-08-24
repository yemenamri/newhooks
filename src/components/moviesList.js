import Mvs from './mvs'
import SearchBox from './SearchBox';

    function MoviesList ({movies,searchinput}) {


    return(
        
        <div>
   

  <tr >
  <td style={{color:'Black', fontWeight: 'bold'}}>Title</td>
<td style={{color:'Black', fontWeight: 'bold'}}>Description</td>
<td style={{color:'Black', fontWeight: 'bold'}}>PosterURL</td>
<td style={{color:'Black', fontWeight: 'bold'}}>Rating</td>
</tr>





{movies

 .filter((detailfilm) => 

 detailfilm.title.toLowerCase().includes(searchinput.trim().toLowerCase()) || detailfilm.rating.toLowerCase().includes(searchinput.trim().toLowerCase()
 
 ) 
 
 )
 
 

.map((detailfilm)=> (< Mvs  film= {detailfilm} key={detailfilm.id}/>))}




</div>  

    )}


    export default MoviesList;

