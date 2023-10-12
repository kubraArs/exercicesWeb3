
import React from "react"

const Button = ({value, onClick}) => {
    return(
    <button onClick={onClick} className={value}>
    {value}</button>
    )
  }
export default Button
