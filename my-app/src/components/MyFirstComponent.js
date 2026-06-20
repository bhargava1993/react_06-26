
function MyFristComponent({ name, role, fruitsList }) {
    // console.log("name, role", name,role);
    console.log("child component------",fruitsList)
    // const {name, role} = props;

    // const fruits = ["Apple", "Banana", "Orange"]
    let fruits = fruitsList;
    const users = [
        { id: 1, name: "prem" },
        { id: 2, name: "Avinash" },
        { id: 3, name: "anil" },
    ]
    return (
        <>
            {/* <h1 className="myClass">{name} {role}</h1> */}
            <h1>Fruits List</h1>
            <ul>
                {
                    fruits && fruits.length > 0 ?
                        fruits.map((ele, index) => (
                            <li key={ele + "_" + index}> {ele}</li>
                        ))
                        : "No fruits Found"
                }
            </ul>

            {/* <ul>
                {
                    users.map((ele,index)=>(
                        <li key={ele.name+"_"+index}> {ele.name}</li>
                    ))
                }
            </ul> */}

            {/* {
                fruits.map((ele, index) => (
                    <h2 key={ele+"_"+index}>{ele}</h2>
                )
             )
            } */}

        </>
    )
}

export default MyFristComponent;

