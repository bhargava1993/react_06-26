import { useState } from "react";

function SignUpForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [perror,setPerror] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        console.log("name---", name)
        console.log("email---", email)

        // if(!/^\d{10}$/.test(phone)){
        //     alert("enter numbers only")
        //     return;
        // }
        
        // /^\d{10}$/.test
        // /^\d{0,10}
        let obj = { name: name, email: email }
        if(/^\d{0,10}$/.test(phone)){
            setPerror("")
            console.log("regex---",phone);
            obj["phone"]=phone;
        }else{
            setPerror("please enter valid phone number")
        }


        
        console.log("obj",obj);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name : </label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <br></br>
            <label>Email : </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <br></br>
            <label>Phone : </label>
            <input value={phone} onChange={(e) => {
                console.log("e.target.value----",e.target.value);
                setPhone(e.target.value)
            }} />
            {perror ? <span style={{color:"red"}}>{perror}</span> :""}
            <br></br>
            <button type="submit"> Submit</button>
        </form>
    )

}

export default SignUpForm;