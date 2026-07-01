import { useMemo, useState } from "react"

export default function UseMemo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("")
    

    const square = useMemo(()=>{
        console.log("caluclulating values----");
        return count * count;
    },[count])

    return (
        <>
            <h1>useMemo Hook</h1>
            <h2>Square: {square}</h2>

            <button onClick={() => {
                setCount(count + 1)
            }}>
                Increment
            </button>
            <br></br>
            <br></br>

            <h2>Name: {name}</h2>
            <input type="text" placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)} />

        </>)
}


