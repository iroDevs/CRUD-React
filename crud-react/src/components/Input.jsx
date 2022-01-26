
import React from 'react';
import './css/styleComponents.css'
export default function Input() {
  return (
   <>
   <div className='menu container'>
    <h1 className='display-1'>To do List</h1>
   </div>
    <div className='form-caixa container'>
      <h2 className='display-3'>Adcionar tarefa</h2>
      <input type="text" className="form-control"></input>
      <button type="button" className="btn btn-success">ADD</button>
    </div>
   </>
  );
}
