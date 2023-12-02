import React, { useState } from "react";

class AboutCard extends React.Component{
    constructor (props){
        super(props)
        console.log('constructor of '+this.props.name);
        this.state={
            counter:0
        }
    }

    componentDidMount(){
        console.log('componentDidMount of '+this.props.name);
    }

    render(){
        console.log('render of '+this.props.name);
        <div>
            <button>{this.state.counter}</button>
            <button onClick={()=>{console.log(this.setState(counter=this.state.counter+1))}}>Increment</button>
        </div>
    }
}

export default AboutCard