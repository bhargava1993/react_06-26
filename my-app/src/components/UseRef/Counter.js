import { useRef, useState } from "react";

export default function Counter() {

    const countRef = useRef(0);
    // const [,forceRender] = useState(0)
    const headingRef = useRef(null);

    function incrementRef() {
        countRef.current++;
        console.log("countRef---", countRef.current);
        headingRef.current.textContent = `CounterRef: ${countRef.current}`;
        // forceRender((n)=>n+1);
    }

    let [count, SetCount] = useState(0);

    function increment() {
        SetCount(count++)
        console.log("countRef---", count);
    }

    return (
        <>
            <h1 ref={headingRef}></h1>
            <button onClick={incrementRef}>IncrementRef</button>
            <h1>CounterState: {count}</h1>
            <button onClick={increment}>Increment</button>
        </>
    )
}