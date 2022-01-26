
import React from 'react';

import './App.css'
import Input from './components/Input';

import Lista from './components/Lista'
import Opcoes from './components/Opcoes';


export default function App() {
  return (
   <div className="FullSizeAPP">
   <Input />
    <Lista />
    <Opcoes />
   </div>
  );
}
