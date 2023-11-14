import React from "react";
import { useState } from "react";


function One(){

  var[initial,running] = useState("hello boss")

return(
    <div>
        <h1>{initial}</h1>
        <h1>hi </h1>
    </div>
)



}

export default One