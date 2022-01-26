
import React from 'react';
import './css/styleComponents.css'
export default function Input() {
  return (
   <div className='menu'>
     <h1>To Do List React.JS</h1>
     <form className='formulario'>
       <div className='campo'>
       <label className='label-item'>Tarefa: </label>
       <input type="text"className='campo-item'></input>
       </div>
       <div className='opcoes'>
       <p role='button' className="btn" >adcionar</p>
       <p role='button' className="btn" >excluir os concluidos</p>
       <p role='button' className="btn" >Salvar estado atual</p>
       </div>
     </form>
   </div>
  );
}
