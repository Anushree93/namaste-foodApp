import React from "react";

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
  }

  async componentDidMount(){
    const data = await fetch('https://api.github.com/users/Anushree93');
    const json = await data.json();
    
    this.setState({
        userInfo:json
    })
    console.log(json);

  }

  render(){
    return(<div>
      <img className="fixImg" src={this.state.userInfo.avatar_url}/>
      <h1>Username: {this.state.userInfo.login}</h1>
      <h1>URL: {this.state.userInfo.html_url}</h1>
      <h1>Location : {this.state.userInfo.location}</h1>
      </div>)
  }
}

export default About;
