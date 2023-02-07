import React from "react";
import "./App.css"



export default function Image(props) {
   return(

   <div className="card">
        

    <img className="image" src={props.mydata.image} alt="imageofwoman"/>

    </div>
   )
}