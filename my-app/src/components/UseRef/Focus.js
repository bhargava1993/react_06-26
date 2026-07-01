import { useRef } from "react";

function Focus() {
    const inputRef = useRef(null);
    const input2Ref = useRef(null);
    const h1Ref = useRef(null);


    function focusInput(){
        console.log("inputRef.current----",h1Ref.current)
        console.log("inputRef.current----",inputRef.current)
        h1Ref.current.focus();
        h1Ref.current.style.color="red";
        // input2Ref.current.focus();
        inputRef.current.focus();
    }

    // inputRef.current = HTMLInputElement
// without useRef you can access by uinsg DOM quires
//document.getElementById("inputId")


    return (
        <>
        <h1 ref={h1Ref} id="h1id"> useRef Hook</h1>
        <input ref={inputRef} id="inputId"/>
        <input ref={input2Ref} id="inputId"/>
        <br></br>
        <button onClick={focusInput}>
            Focus
        </button>

        </>
    )

}

export default Focus;