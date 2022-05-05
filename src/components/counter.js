import React, { useEffect, useState } from "react";

function Counter(){

    // use effect hook 
    const [count, setCount] = useState(0); 
    
    useEffect(()=> {
        document.title = ' you clicked ${count} times '; 
    }); 

   function handleCount(){
        setCount(count + 1); 
    }; 

    return (
        <div>
            <p> You Clicked {count} times</p>
            <button onClick={handleCount}> + </button>
        </div>
    )

}

export default Counter; 