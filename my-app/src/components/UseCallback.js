
import { useCallback, useState } from "react";
import Child from "./Child"

export default function UseCallback(){
    const [count, setCount] = useState(0)

    const greet = useCallback(()=>{
        alert ("Hello Students")
    },[]);

    return (
        <>
        <h1>UseCallback: {count}</h1>
        <button onClick={()=> setCount(count+1)}>
            Increment
        </button>
        <Child greet={greet} />
        </>
    )

}