import React from 'react'

export default function Alert(props) {
    console.log("==>" ,props.alert)
  return (
    props.alert != null
        ?   <div class="alert alert-success" role="alert">
                {props.alert.msg}
             </div>
        : <></>
    
  
  )
}
