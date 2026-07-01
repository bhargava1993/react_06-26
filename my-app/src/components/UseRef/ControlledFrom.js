import { useState } from "react";

export default function ControlledFrom(){

    let [name, setName]= useState("");

    function handleForm(e){
        e.preventDefault();
        console.log("name---", name)
    }

    return(
        <form onSubmit={handleForm}>
            <label>Name:</label>
            <input type="text"  value={name} onChange={(e) => {
                console.log("name---",e.target.value);
                setName(e.target.value)
            }}/>
            <h1>Name: {name}</h1>
            <br>
            </br>
            <button type="submit">submit</button>
        </form>
    )

}