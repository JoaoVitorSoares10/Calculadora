import React from 'react'

function buttonNumbers(props) {
  return (
    <button id={props.id} onClick={()=> props.onClick(props.value)} className="number">{props.value}</button>
    );
}

export default buttonNumbers
