import React from 'react'

export default function Alert(props) {
    console.log("==>" ,props.alert)
  return (

    props.alert != null
        ?   <div style={{height : '50px'}}>
                <div class="alert alert-success" role="alert">
                    {props.alert.msg}
                </div>
            </div>
        : <div style={{height : '50px'}}></div>
    
  
  )
}
