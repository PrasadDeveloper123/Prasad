import React, { useContext, useState } from "react";
import { prasad } from "../App";

function Forms(){

    var c={
        name:"",
        age:"",
        phoneno:""
    }

  var [a,b] = useState(c)
 var L= useContext(prasad)
 console.log(L)
  

  return(
    <div>
        Name:<input type="text" value={a.name} onChange={prasad}/><br></br>
       Age: <input type="number" value={a.age}onChange={prasad1}/><br></br>
        Phone No:<input type="number" value={a.phoneno} onChange={prasad2}/>

        <h1>{L}</h1>
    </div>
  )

function prasad(e){

    b({name:
        e.target.value})
    console.log(a.name)
    


    

    
    
}

function prasad1(e){

    b({age:e.target.value})
    


    

    
    
}

function prasad2(e){

    b({phoneno:e.target.value})
    


    

    
    
}

}

export default Forms