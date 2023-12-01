import { useState } from "react";

const AboutCard = (props) => {
    const [count,setCount] = useState(0);
    const { name , lastname, place} = props;

    return (<div>
        <h1>this is about card : {name}</h1>
        <h2>this is about card : {lastname}</h2>
        <h3>this is about from : {place}</h3>
        <h4>counter:{count}</h4>
        <button onClick={()=>{setCount(count+1);}}>Increment</button>
        <button onClick={()=>{setCount(count-1);}}>Decrement</button>
    </div>)
}

export default AboutCard