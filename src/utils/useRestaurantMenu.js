import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

    //use State hook is used to declare state variables
    //and changes occurring in state will rerender the comp.
    const[resInfo,setResInfo] = useState([]);

    // useEffect hooks takes 2 parameters- 1 is the callback arrow function and 2nd is the dependency array
    // 1.if the array is any variable, it will call callback function every time variable changes and rerenders the comp
    // 2. if the array is [], it will render the body, call useEffect and render the body again. rendering twice.
    // 3. if you pass no dependency array at all, your effect will run afrer every single render and rerender of your comp
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(RESTAURANT_URL + resId);
        const json = await data.json();
        setResInfo(json?.data?.cards);
    }
   
    return resInfo;
}

export default useRestaurantMenu;