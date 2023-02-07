import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
export default function Details(props){
    return(
        <div className="card">
            <h1>{props.mydata.name}</h1>
            <span>{props.mydata.position}</span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, pariatur vitae esse illum sit, dolore impedit aut, odit veritatis perferendis exercitationem nisi nobis unde nemo beatae aperiam mollitia earum facere.</p>
            <div className="row">
                <div className="column">
                <p className="icon"><FontAwesomeIcon icon={faCamera} /></p> 
                </div>
                <div className="column">
                <p className="icon"><FontAwesomeIcon icon={faHeart} /></p> 
                </div>
                <div className="column">
                <p className="icon"><FontAwesomeIcon icon={faUser} /></p> 
                </div>
            </div>
            <div className="row">
                <div className="column">
                <p className="icon">2252</p> 
                </div>
                <div className="column">
                <p className="icon">238</p> 
                </div>
                <div className="column">
                <p className="icon">753</p> 
                </div>
            </div>

            <button>Follow Me</button>
            
            
        </div>
    )
}