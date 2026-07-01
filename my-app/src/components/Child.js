
import React from "react";

 function Child({greet}){
    console.log("child component");
    return (
        <>
        <h1>Child</h1>
        <button onClick={greet}> Say Hello</button>
        </>
    )

}

export default React.memo(Child)