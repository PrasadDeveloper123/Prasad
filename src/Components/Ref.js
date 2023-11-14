import React, { useRef } from "react";


function Ref(){

  var data=  useRef("")
    return(
        <div>
<input onClick={check} id="one" ref={data}/>
        </div>
    )

    function check(){

       var a= document.getElementById("one")

       console.log(data.current.value)
        
    }
}


export default Ref