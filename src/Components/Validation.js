import React from "react";


function Validation(){

    function two(){

        var A=document.getElementById("a").value
     
        console.log(A)
     
        if(A.match(/[a-zA-Z]/)){
         alert("please enter the input")
         document.getElementById("b").innerHTML="please enter the input"
     
        }
    }

    return(
        <div>
<h1>hi iam robo</h1>
Name:<input type="text" id="a" onKeyUp={two}/>

<span id="b"></span>

</div>
    )


    


    
}

export default Validation