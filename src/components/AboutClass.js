import React from "react";

class AboutClass extends React.Component{
   constructor(props){
    super(props);

    console.log('constructor of '+this.props.name);
   }

   componentDidMount(){
    console.log('componentDidMount of '+this.props.name);
   }

   render(){
    console.log('render of '+this.props.name);
    return (<div>
    </div>)
   }
}

export default AboutClass