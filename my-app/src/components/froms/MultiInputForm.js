import { useState } from "react";

function MultiInputFrom() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        city: "",
        phone: ""
    });

    const handleChange = (e) => {
        // console.log("e---", e.target);
        const { name, value } = e.target;
        // console.log("name---", name);
        // console.log("value---", value);

        //update only the changed filed 
        // while keeping other values unchanged
        setFormData((prevDate)=>({
            ...prevDate,
            [name]:value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit formData----", formData);

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input
                type="text"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleChange} />
            <br></br>
            <label>Email: </label>
            <input
                type="text"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange} />
            <br></br>
            <label>City: </label>
            <input
                type="text"
                placeholder="Enter email"
                name="city"
                value={formData.city}
                onChange={handleChange} />
            <br></br>
            <label>Phone: </label>
            <input
                type="text"
                placeholder="Enter email"
                name="phone"
                value={formData.phone}
                onChange={handleChange} />
            <br></br>
            <button type="subimt">Submit</button>
        </form>
    )

}

export default MultiInputFrom;