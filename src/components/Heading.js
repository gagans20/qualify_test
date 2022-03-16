import React, {useState} from "react";
 
export default function Heading(props){
    return(
        <div id="heading">
            <div id="image">
                <img src={props.image} height="100%" width="160 px"></img>
            </div>
            <div id="fullName">
                {props.fullName}
            </div>
        </div>
    )
 }