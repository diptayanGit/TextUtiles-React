import React from 'react'

export default function Alert(props) {
    const capitalise = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height: '65px'}}>
      {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {capitalise(props.alert.type)}: <strong>{props.alert.msg}</strong>
    </div>}
    </div>
  )
}
