import { useEffect, useState } from "react";

function Timer(){
    let [time, SetTime]=useState(new Date());

    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log("Timer is running...")
            SetTime(new Date());
        },1000)
       
        //clean function
        return ()=>{
            clearInterval(interval);
            console.log("Timer Stopped...")
        }
    },[])

    return (
    <div>
        <h2>Current Time</h2>
        <h1>{time.toLocaleTimeString()}</h1>
        </div>)
}

export default Timer;