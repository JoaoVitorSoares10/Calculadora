import React from 'react'

function ButtonOperators(props) {
  return (
    <button id={props.id} onClick={()=> props.onClick(props.value)} className="buttonOperators">{props.value}</button>
  );
}

export default ButtonOperators
