import './App.css';
import React, { useState } from 'react'

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
  
  function apareceConfig() {
    setConfig(true)
    
  }
 function desapareceConfig(param){
   setConfig(false)
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
            if(mostraConfig === true){
               return(
              <div  className="caixas" onMouseLeave={desapareceConfig} onMouseEnter={apareceConfig} key={index} style={style} >
                <p className="caixas-name">{element.nome}</p>
                <div className={`caixa-Buttons-out`}>
                  <button className={`caixas-edit`} >EDIT</button>
                  <button className={`caixas-delete`}>DELETE</button>
                  </div>
              </div> 
            )

            }
            return(
              <div  className="caixas" onMouseLeave={desapareceConfig} onMouseEnter={apareceConfig} key={index} style={style} >
                <p className="caixas-name">{element.nome}</p>
                <div className={`caixas-Buttons`}>
                  <button className={`caixas-edit`} >EDIT</button>
                  <button className={`caixas-delete`}>DELETE</button>
                  </div>
              </div> 
            )

          })}
      </main>
    </div>
  );
}

export default App;
