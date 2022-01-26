import {React, useState,useContext} from 'react';
import ToDoContext from '../context/ToDoContext';

export default function Lista() {
  const {lista,setLista} = useContext(ToDoContext)
   const [toList , setToList] = useState([]);
  return (
    <div className="quadro">
 <ul className="quadroLista list-group list-group-flush">
    {lista.map((elem,index) =>{
      return (
         <li key={index} className="list-group-item">{elem}</li>
      );
    })}
     
 
  
</ul>
    </div>
  );
}
