import React from "react";

function Mvs(props){
  //const handleName=()=>{alert(props.personne.fullName)}
  return (
   <tr>
  
  <td>{props.film.title}</td>
  <td>{props.film.description}</td>
  
  <td><img src = {props.film.posterURL}/></td>
  <td>{props.film.rating}</td>
  
    </tr>
      )
      
  }
  
  export default Mvs;




