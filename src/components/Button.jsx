import React from 'react'
import '../css/Button.css'
function Button(props) {
    const isOperator=(valor)=>{
        return isNaN(valor) && valor != '.' && valor != '='
    }
  return (
    <div className={`boton-contenedor ${isOperator(props.children)?'operador':null}`}
    onClick={()=>props.valueInput(props.children)}>
        {props.children}
    </div>
  )
}
export default Button