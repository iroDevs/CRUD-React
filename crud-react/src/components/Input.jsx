
import {React, useState,useContext} from 'react';
import ToDoContext from '../context/ToDoContext';
import './css/styleComponents.css'


export default function Input() {
  const [digitado , setDigitado] = useState('');
  const {lista,setLista} = useContext(ToDoContext)
  
  function handleChange(e) {
    const value = e.target.value;
    setDigitado(value);
  }

  function ValidAdd() {
    let result = true;
    
    lista.forEach(element => {
      console.log(element , digitado);
      if (element === digitado) {
        result = false;
      }
    });
    return result
  }

  function handleClick(){
    const isValid = ValidAdd();
  if (isValid) {
    setLista([digitado,...lista]);
    return
  }
  alert('a tarefa já existe');
  
  }
  return (
   <>
   <div className='menu container'>
    <h1 className='display-1'>To do List</h1>
   </div>
    <div className='form-caixa container'>
      <h2 className='display-3'>Adcionar tarefa</h2>
      <input type="text" onChange={handleChange} className="form-control"></input>
      <button type="button" onClick={handleClick} className="btn btn-success">ADD</button>
    </div>
   </>
  );
}
