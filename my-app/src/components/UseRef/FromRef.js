import { useRef, useState } from 'react';

export default function FromRef() {
    const inputRef = useRef();
    let [name,setName]=useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("name--",inputRef.current.value);
        setName(inputRef.current.value)
    }

    return (
    <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" ref={inputRef} id="name"/>
        <h1>Name:{name}</h1>
        <br></br>
        <button type="submit">Submit</button>
    </form>
    )
}