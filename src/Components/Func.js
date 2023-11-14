import React from "react";
import { useState } from "react";


function Func(props){

    function prasad(){
        b(a+1)
    }
    var [a,b]=useState(0)



    return(
        <div>
            <label>UserName:{a}</label>

            <h2 onClick={prasad}>click here</h2>
            <h1>{props.name}</h1>

        </div>
    )
    
}


export default Func