import { useEffect, useState } from "react";

function LifeCycleHooks(){

    const [count,SetCount] = useState(0);

    const [decount, setDecount] = useState(100)

    //every render this will call
    useEffect(()=>{
        console.log("1. useEffect Executed");
    })

    // when initial page loades
    //[] means run only once, when the component is  mounted
    useEffect(()=>{
        console.log("2. useEffect with dependency Executed");
    },[])


    useEffect(()=>{
        console.log("3. useEffect with dependency and value Executed");
    },[count])


    useEffect(()=>{
        console.log("4. clean up function");

        return ()=>{

        }
    },[])


    return(
        <>
        <h1>component disply data</h1>
        <h1>count:{count}</h1>

        <button onClick={()=> SetCount(count+1)}>Increment</button>

        <h1>decount:{decount}</h1>

        <button onClick={()=> setDecount(decount-1)}>decrement</button>
        </>
    )

}

export default LifeCycleHooks;