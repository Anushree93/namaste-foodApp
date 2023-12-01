import React from "react";

class AboutClass extends React.Component{
   constructor(props){
    super(props);
   }

   render(){
    const {name, html_url,login} = this.props;
    return (<div>
        <h1> Name:  {name}</h1>
        <h1> Login: {login}</h1>
        <h1> URL:  {html_url}</h1>
    </div>)
   }
}

export default AboutClass