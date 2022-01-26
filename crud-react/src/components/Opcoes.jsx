
import {React, useState,useContext} from 'react';
import ToDoContext from '../context/ToDoContext';

export default function Opcoes() {
  const {lista,setLista , modal , setModal} = useContext(ToDoContext)

  function isConfirmation() {
    
  }
  function DeleteAll() {
    const confirmation = isConfirmation()
  }

  return (
    <div className="container opcoes">
      <button type="button" onClick={DeleteAll} className="btn btn-danger">Apagar todos</button>
      <button type="button" className="btn btn-light">Apagar concluidos</button>
    </div>
  );
}
