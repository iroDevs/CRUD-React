import React,{ useState } from 'react'
import './QuadradosStyle.css'

export default function Quadrados({cor , quadrado:element}) {
 const style = cor;
  const [buttons , setButtons] = useState(false);
  
  function ShowConfig(){
    setButtons(true);
  }

  function HideConfig(){
    setButtons(false);
  }

  if(buttons){
    return(
  <div className="quadrado-show" onMouseEnter={ShowConfig} onMouseLeave={HideConfig} style={style} >
      <div className="buttons-show">
      <button type="button" >Editar</button>
      <button type="button" >Excluir</button>
      </div>
      <p>{element.nome}</p>
    </div>
    )
  }

  return (
    <div className="quadrado-show" onMouseEnter={ShowConfig} onMouseLeave={HideConfig} style={style} >
      <div className="buttons-hide">
      <button type="button" >Editar</button>
      <button type="button" >Excluir</button>
      </div>
      <p>{element.nome}</p>
    </div>
  )
}
