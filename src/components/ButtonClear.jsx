import React from 'react'
import '../css/BotonClear.css'
function ButtonClear(props) {
  return (
    <div className='boton-clear' onClick={()=>props.clearInput()}>{props.children}</div>
  )
}
export default ButtonClear