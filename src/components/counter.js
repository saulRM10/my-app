import React, { useEffect, useState } from "react";

function Counter(){

    // use state hook ; whenever data changes re-render UI
    const [count, setCount] = useState(0); 
    // count => reactive data /or state, (0) = default value 
    // setCount => setter function

    // useEffect
    // component lifecycle: mounting(initialized, happens once), updating(state is updated, can happen multiple time), unmounting(destroyed)
    // is a function that uses a function (you) I decide, it runs when mounted or when state changes
    useEffect(()=> {
        document.title = ' you clicked ${count} times '; 

        // tear down code, will be called when component is destroyed 
        return () => alert('goodbye component !'); 
    }, 
        [] // array of dependencies, usually left empty if you just want it to run once when the component is initialized
    ); 
 
   function handleCount(){
        setCount(count + 1); 
    }; 

    function lowerCount(){
        setCount(count - 1); 
    }; 
    return (
        <div>
            <p> You Clicked {count} times</p>
            <button onClick={handleCount}> + </button>
            <button onClick={lowerCount}> - </button>
        </div>
    )

}

export default Counter; 