import React from "react"

const Frutas = (props) => {
  
  return (
    <React.Fragment>
        <ul>{
        props.frutasApp.map((fruta, index)=>(
          <li key={index}>{fruta}</li>
        ))
      }</ul>
      <p>Lorem, ipsum dolor.</p>
    </React.Fragment>
    // se puede sacar el react.fragment y dejar solo los signos y funciona igual
  )
}

export default Frutas