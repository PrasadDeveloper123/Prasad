import React from "react";

class FormsTwo  extends React.Component{

    constructor(){

        super()
        this.state={
            name:"",
            age:"",
            phoneno:""
        }


this.replace=this.replace.bind(this)
    }

    replace(e){
        this.setState({
            name:e.target.value,
            

        })
    }

    render(){

        return(
            <div>
                <input type="text"  value={this.state.name} onChange={this.replace}/>
                <input type="text" value={this.state.age}/>
                <input type="text" value={this.state.phoneno} onChange={this.replace}/>

            </div>
        )
    }


  
}

export default FormsTwo