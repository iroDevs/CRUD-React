
import React, {useContext} from 'react';
import ToDoContext from './context/ToDoContext';
import './App.css'
import Input from './components/Input';

import Lista from './components/Lista'
import Opcoes from './components/Opcoes';
import Modal from './components/Modal';

export default function App() {
  const {modal} = useContext(ToDoContext);
  return (
   <div className="FullSizeAPP">
   <Input />
    <Lista />
    <Opcoes />
    <Modal />
   </div>
  );
}
