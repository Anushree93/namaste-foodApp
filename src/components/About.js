import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      userInfo : {
         name : 'a',
         login :'b',
         html_url: 'c'
      }
    }
    //console.log('constructor of parent');
  }

  async componentDidMount(){
    const data = await fetch('https://api.github.com/users/Anushree93');
    const json = await data.json();
    
    this.setState({
        userInfo:json
    })
    //console.log('componentDidMount of parent');
  }

  render(){
    console.log('render of parent');
    return(
    <div>
      <img src={this.state.userInfo.avatar_url}/>
      <h1>Username: {this.state.userInfo.login}</h1>
      <UserContext.Consumer>
       {
        ({userName})=><h1>{userName}</h1>
       }
      </UserContext.Consumer>
      <h1>URL: {this.state.userInfo.html_url}</h1>
      <h1>Location : {this.state.userInfo.location}</h1>
      </div>
    )
  }
}

export default About;
