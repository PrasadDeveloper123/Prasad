import React from "react";

class Cls extends React.Component{

    

    constructor(){
        super()
       this.state={
            name:"Prasad"
        }

        this.change=this.change.bind(this)
        
    }

    
    render(){
        return(
            <div>
                <h1 id="o">{this.state.name}</h1>
                <h1 onClick={this.change}>Click here{this.props.name}</h1>
            </div>
        )

    }

    change(){

        var a=document.getElementById("o").innerHTML
        console.log(a)
        this.setState({
            name:"prasadkrishnapuram"

        }
        )
    }


    
}

export default Cls