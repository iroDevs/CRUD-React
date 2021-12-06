import './App.css';
import React, { useState } from 'react'
import Quadrados from './components/Quadrados'

function App() {
  const [cor, setCor] = useState("#5e72e4")
  const [nome,setNome] = useState("")
  const [quadrados,setQuadrados] = useState([])
  const [mostraConfig,setConfig] = useState(false);
  function HandleClick(){
    let quadrado = {
      nome: nome,
      cor: cor,
    }
    setQuadrados([quadrado , ...quadrados]);
  }

  function deleteAll(){
   
    setQuadrados([]);
  }
  
  

 function editClick(){
  console.log("edit");
 }
 function deleteClick(){
console.log("delete");
 }



  return (
    <div className="Main">
      <p>React CRUD</p>
      <form>
        <label className="config">
          <pre className="texto-config">
            Olá esse é um CRUD desenvolvido em React.js onde podemos adcionar
            caixas personalizadas  com cor e nome , 
            podemos tambem apagalas e editalas trocando sua cor ou nome
          </pre>
          <input type="text" className="name-text" onChange={(e) => setNome(e.target.value)} placeholder="nome da caixa"></input>
          <input type="color" id="cor" value={cor} onChange={(e) => setCor(e.target.value)} ></input>
          <button type="button" onClick={HandleClick} id="button-subimit">Adcionar</button>
          <button type="button" onClick={deleteAll} id="button-subimit">Remover Todos</button>
        </label>
      </form>
      <main>
          { quadrados.map((element,index)=> {
            let cor = element.cor;
            console.log(cor);
            let style = {
              backgroundColor:cor,
            }

           return <Quadrados key={index} cor={style} quadrado={element} />

          })}
      </main>
    </div>
  );
}

export default App;
