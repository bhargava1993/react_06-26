import { useState } from "react";

function EventBinding() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Bhargava");

    function Increment(){
        setCount(count + 1);
        console.log("After count---",count);
    }

     function Decrement(){
        setCount(count - 1);
        console.log("After count---",count);
    }

     function enterName(e){
        console.log("e--------",e)
        setName(e.target.value)
    }
    

    return (
        <>
            <h1>EventBinding</h1>
            <h1>Count: {count}</h1>

            <button onClick={
                Increment
            }>
                Increment</button>

            
            <button onClick={
                Decrement
            }>
                Decrement</button>

            {/* <button onClick={
                () => setCount(count + 1)
            }>
                Increment</button> */}


            <h1>Enter your Name</h1>
            <input type="text" 
            placeholder="Type your name"
            value={name}
            onChange={(e)=>enterName(e)}/>
            <p>Hello, {name}</p>
        </>
    )
}

export const name1 = "bhargava";

export const name2 = "Prem";

export const name3 = "Avinash";

export default EventBinding;